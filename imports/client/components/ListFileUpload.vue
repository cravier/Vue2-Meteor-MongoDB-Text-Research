<template>
    <v-list>
            <v-subheader>{{items.length}} files will be uploaded</v-subheader>
                <v-list-tile  v-for="item in items" v-bind:key="item.name" avatar>
                    <v-list-tile-avatar>
                    <v-icon class="blue white--text">assignment</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                    <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{item.type}} ({{octetsToMo(item.size)}} Mo)</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple @click="$emit('removeItem',item.name)">
                            <v-icon color="grey lighten-1">delete</v-icon>
                        </v-btn>
                        {{ item.progress }}
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
</template>

<script>
    import { octetsToMo } from '../../modules/FilesTools'
    export default {
        props: ['items'],
        methods: {
            octetsToMo
        }
    }
</script>