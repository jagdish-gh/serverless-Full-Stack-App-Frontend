import {useState} from "react";

export  function useFormFields(initialValue){
    const [fields,setValues] = useState(initialValue);
    return[
        fields,
        function(event){
            setValues({
                ...fields,
                [event.target.id]: event.target.value
            });
        }
    ];
}