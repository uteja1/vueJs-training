<template>

    <div class="table-responsive">
        <table class="table text-center">
            <thead>
                <tr>
                    <th style="width: 34%;"></th>
                    <th style="width: 22%;">Free</th>
                    <th style="width: 22%;">Pro</th>
                    <th style="width: 22%;">Enterprise</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="text-start">Public</th>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Private</th>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <th scope="row" class="text-start">Permissions</th>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Sharing</th>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Unlimited members</th>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">Extra security</th>
                    <td></td>
                    <td></td>
                    <td><svg class="bi" width="24" height="24">
                            <use xlink:href="#check" />
                        </svg></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Table',

});
</script>

<style scoped>

</style>
