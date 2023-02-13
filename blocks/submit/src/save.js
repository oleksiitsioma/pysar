import { useBlockProps } from "@wordpress/block-editor";


export default function Save( { attributes } ) {

    const { buttonText } = attributes;

    
    console.log( useBlockProps )
    
    const blockProps = useBlockProps.save();

    console.log( blockProps );
	return (
        
        <input { ...blockProps } 
            type={ 'submit' }
            value={ buttonText }
        />

    );
}
