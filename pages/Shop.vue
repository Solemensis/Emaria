<script setup>
// import { createClient } from "@supabase/supabase-js";

// const config = useRuntimeConfig();

// const supabaseUrl = config.SUPABASE_URL;
// const supabaseKey = config.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

const supabase = useSupabaseClient();
</script>
<template lang="">
  <div>
    <Navbar />
    <Products />
  </div>
</template>

<style lang=""></style>
