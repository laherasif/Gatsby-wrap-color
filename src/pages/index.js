import React from "react"

const Home = () => {
  if (window.console && typeof console.log === 'function') {
    window.addEventListener('setIframeHeight:shrinked', function (e) {
          console.log('iframe shrinked', e.detail);
      });
      window.addEventListener('setIframeHeight:enlarged', function (e) {
            console.log('iframe enlarged', e.detail);
        });
    }
  return(
    <div
    style={{
      display: "flex",
      alignContent: "center",
      margin: "3rem auto",
      justifyContent: "space-around",
      
    }}
  >
    <div>
      <h2>Task 4 : Ifram with wrap colors</h2>
      <iframe src="/test.html" title="dummy" style={{width:'800px',height:'600px'}}></iframe>
    </div>
   
  </div>
  )
}
 export default Home


