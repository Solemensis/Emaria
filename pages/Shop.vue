<script setup>
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();

const supabaseUrl = config.SUPABASE_URL;
const supabaseKey = config.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let { data: anan, error } = await supabase.from("anan").select("*");
</script>
<template lang="">
  <div>
    <h2>{{ anan }}</h2>

    <Navbar />
    <Products />
  </div>
</template>

<style lang=""></style>
