import { useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, CheckboxControl } from "@wordpress/components";

import './editor.scss'

export default function Edit( { attributes , setAttributes} ) {

    const { inputName, isRequired } = attributes

    const blockProps = useBlockProps();

    return [


        <InspectorControls key="setting">
            <PanelBody
                title="TextArea Settings"
                initialOpen
            >

                <TextControl
                    label="'Name' attribute"
                    value={ inputName }
                    onChange={ ( val ) => { setAttributes ( { inputName: val })} }
                    help="Refer to the textarea element documentation for proper input naming"
                />

                <CheckboxControl
                    label="Make required"
                    checked={ isRequired }
                    help="Required fields should be filled for the form to validate"
                    onChange={ ( val ) => { setAttributes ( { isRequired: val })} }
                />

            </PanelBody>
        </InspectorControls>,

        <BlockControls>
        </BlockControls>,
    
        <div { ...blockProps } >

            <div class='pysarBlockSettings'>
                <p class="pysarBlockSettings__title">TextArea</p>
                <p class="pysarBlockSettings__item">
                    <span class="pysarBlockSettings__itemTitle">TextArea field name:</span> { inputName }
                </p>
            </div>
            
        </div>


    ];
}