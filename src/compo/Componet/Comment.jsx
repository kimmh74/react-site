


const style = {
    nameText:{
        color:"blue",
        fontSize:16
    }
  
    }
export default function Comment(propos){

    return(
<>
 
    <h3>내가 만든 컴포넌트</h3>
     <p className="a" style={style.nameText} 
     >글자모양--{propos.name}--{propos.comment}.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
   />
    
        </>
    )
    
    
    
}