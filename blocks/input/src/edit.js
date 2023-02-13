import { useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, CheckboxControl } from "@wordpress/components";

import './editor.scss'

export default function Edit( { attributes , setAttributes} ) {

    const { inputName, inputType, isRequired } = attributes

    const blockProps = useBlockProps();

    return [


        <InspectorControls key="setting">
            <PanelBody
                title="Input Settings"
                initialOpen
            >

                <TextControl
                    label="'Name' attribute"
                    value={ inputName }
                    onChange={ ( val ) => { setAttributes ( { inputName: val })} }
                    help="Refer to the input element documentation for proper input naming"
                />

                <SelectControl
                    label="Input's 'type' attribute"
                    value={ inputType }
                    onChange={ ( val ) => { setAttributes ( { inputType: val })} }
                    options={[
                        {
                            label: "Text",
                            value: "text"
                        },
                        {
                            label: "Password",
                            value: "password"
                        },
                        {
                            label: "E-mail",
                            value: "email"
                        },
                    ]}
                    help="More input types are coming as proper validation for them is being introduced."
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
                <p class="pysarBlockSettings__title">Input</p>
                <p class="pysarBlockSettings__item">
                    <span class="pysarBlockSettings__itemTitle">Input type:</span> { inputType }
                </p>
                <p class="pysarBlockSettings__item">
                    <span class="pysarBlockSettings__itemTitle">Input name:</span> { inputName }
                </p>
            </div>
            
        </div>


    ];
}