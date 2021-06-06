

const findLocation = () =>{
    const status = document.querySelector('.status');


        const success = (posstion) =>{
        

          const latitude = posstion.coords.latitude;
          const longitude = posstion.coords.longitude; 
          
    const geoLocationUrlApi =`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
         
    fetch(geoLocationUrlApi)
          .then(res => res.json())
          .then(UserData=>{
           status.textContent = UserData.principalSubdivision;
           console.log(UserData.principalSubdivision)
          })
    
          

        }
        const error = () =>{
                     status.textContent="Can't find Your Location"
        } 

    navigator.geolocation.getCurrentPosition(success,error)
}

document.querySelector('.find').addEventListener('click',findLocation)



