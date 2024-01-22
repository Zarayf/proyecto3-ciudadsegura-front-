import { AuthContext} from "../../context/AuthContextProvider";
import { useContext, useState } from "react"; 
import { newProblemService } from "../../service/newProblemService";
import { useNavigate } from "react-router-dom"; 
 
 
export const FormNewProblem = () => { 
 
    const { token } = useContext(AuthContext); 
 
    const [error, setError] = useState(''); 
    const [Image, setImage] = useState(null); 
 
    const navigate = useNavigate(); 
 
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
 
        try { 
 
            const data = new FormData(e.target); 
 
            const newProblem = await newProblemService({data, token}); 
 
            navigate('/'); 
 
        } catch (error) { 
            setError(error.message); 
        } 
    } 
 
    return ( 
        <form onSubmit={handleSubmit}> 
        
            <div> 
                <label>Titulo</label> 
                <input type="text" name="title" /> 
            </div> 
            <div> 
                <label>Lugar</label> 
                <input type="text" name="place_detail" /> 
            </div> 
            <div> 
                <label>id_district</label> 
                <input type="text" name="id_district" /> 
            </div> 
            <div> 
                <label>Descripcion</label> 
                <input type="text" name="description" /> 
            </div>   
            <div> 
                <label>Imgen</label> 
                <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/> 
            </div> 
            <div> 
                { 
                    Image ? ( 
                        <img src={URL.createObjectURL(Image)} alt="image" /> 
                    ): null 
                } 
            </div> 
            <input type="submit" value="Enviar" /> 
            { error ? <p>{ error }</p> : null} 
        </form> 
    ); 
} 
 
export default FormNewProblem;