import { useBlockProps } from "@wordpress/block-editor";


export default function Save( { attributes } ) {

    const { inputName, isRequired } = attributes;

    const blockProps = useBlockProps.save();
	return (
        
        <textarea { ...blockProps } 
            name={ inputName }
            required={ isRequired }
        />

    );
}
