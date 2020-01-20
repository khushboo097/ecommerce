<template>
    <div class="abc" >
        <div class="xyz">
                <img src="../assets/iphone.png" width="500px" height="500px">
        </div>
        <div class="abcd">
            <h1> Apple IPhone 7(Red,64GB)</h1>
            <h3>In Stock</h3>
            <h3>Description:</h3>
            <dl>
                <dt>Display</dt>
                <dd>6.1-inch Liquid Retina HD display with True Tone</dd>
                <dt>Height</dt>
                <dd>150.9 mm (5.94 inches)</dd>
                <dt>Weight</dt>
                <dd>194 grams (6.84 ounces)</dd>
            </dl>
            <select>
                <option>Select Merchant</option>
                <option>Merchant-4.1</option>
                <option>Merchant-4.3</option>
                <option>Merchant-4.6</option>
                <option>Merchant-4.2</option>
            </select><br>
           
            <label for="quantity" class="a-native-dropdown">Quantity:</label>
            <select name="quantity" autocomplete="off" id="quantity" tabindex="0" class="a-native-dropdown">
                     <option value="1" selected="">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
            </select><br><br>
            <button>Add To Cart</button>
            <button>BuyNow</button>
        </div>
    </div>   
</template>
<script>
export default {
    
}
</script>
<style scoped>
.class{
    width: 100%;
}  
.abc{
    display: flex;
}
.abcd{
    width: 50%;
    margin: 5%;
}
button{
    font-size: 15px;
    
}

/* .abc{
    text-align: left;
}
.xyz{
    padding-bottom:20px;

} */


</style>