import { Meteor } from 'meteor/meteor'

let cannotbeuploaded = [];
let arrayFileSize = 0;

export function fixedNumber(number){
    return Number(number).toFixed(2);
}

export function octetsToMo(number){
    return Number(number /1024/1024).toFixed(2);
}

export function uploadMultiFile(arrayFiles, updateProgress,uploadIsDone){
    cannotbeuploaded = [];
    arrayFileSize = arrayFiles.length;
    arrayFiles.forEach(element => {
        readUploadFile(element, updateProgress, uploadIsDone);
    });

    
}

export function readUploadFile(file, updateProgress,uploadIsDone){
    let reader = new FileReader();
    reader.onerror = function() {
        cannotbeuploaded.push(file);
        console.log("Error")
    };

    if(updateProgress) {
        reader.onprogress = function(evt) {
            if (evt.lengthComputable) {
                var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                if (percentLoaded < 100) {
                    updateProgress(percentLoaded,file.id);
                }
            }
        };
    }
    
    reader.onabort = function(e) {
        cannotbeuploaded.push(file);
        alert('File read cancelled');
    };
    
    reader.onload = function(e) {
        let text = reader.result;
        text = text.replace(/(\t| )/g, "&emsp;");        
        text = text.replace(/\n/g, "<br />");
        updateProgress(100, file.id);
        try {
            Meteor.call('documents.save', {
                title: file.name,
                body: text,
                tags: []
            })

            uploadIsDone(cannotbeuploaded); 
        } catch(exception) {
            cannotbeuploaded.push(file);
        }
    }

    reader.readAsText(file); 
}