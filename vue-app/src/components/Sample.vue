<template>
    <div class="alert alert-success" role="alert">
        <p> {{firstName}} {{lastName}} @ {{city}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Sample',
    props: ["firstName", "lastName", "city"]
});
</script>
