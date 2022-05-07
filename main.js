var images = [,"https://tse2.mm.bing.net/th?id=OIP.RhU23hE4zWozLiSqgG7ZcQAAAA&pid=Api&P=0&w=273&h=171", "https://www.drawinghowtodraw.com/stepbystepdrawinglessons/wp-content/uploads/2010/11/finn-adventure-time-21.png" , "https://st2.depositphotos.com/1738826/5437/v/950/depositphotos_54372567-stock-illustration-business-man-cartoon-presenting.jpg", "https://static.vecteezy.com/system/resources/previews/000/654/724/original/vector-woman-face-cartoon.jpg"];
var names = ["Family Book","Avin Vadrevu", "Savir Vadrevu", "Srinivasa Pardasaradi Vadrevu", "Marcelina Fernandes"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i]; 
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
