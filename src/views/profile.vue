<template>
  <main>
    <div class="imgcontainer">
    <img src="https://atendesigngroup.com/sites/default/files/styles/very_large/public/address-field.png?itok=XSv0R_Ua" alt="Avatar" class="avatar">
  </div>
<label>Email</label><input type="email">
<br>
      Name<input type="text">
<br>
    Address<input type="text">
<br>
    <input type="file" name="">
<br>
<button type="submit">SaveProfile</button>

  </main>
</template>

<script>
export default {
data:function()
{
 
}
}
</script>

<style>
input[type=email], input[type=password],input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>