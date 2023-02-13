import { useBlockProps } from "@wordpress/block-editor";


export default function Save( { attributes } ) {

    const { inputName, inputType, isRequired } = attributes;

    const blockProps = useBlockProps.save();
	return (
        
        <input { ...blockProps } 
            type={ inputType }
            name={ inputName }
            required={ isRequired }
        />

    );
}
