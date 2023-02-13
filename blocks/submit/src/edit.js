import { useBlockProps, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl, CheckboxControl } from "@wordpress/components";

import './editor.scss'

export default function Edit( { attributes , setAttributes} ) {

    const { buttonText } = attributes

    const blockProps = useBlockProps();

    blockProps.className += ' pysarSubmit';

    return [


        <InspectorControls key="setting">
            <PanelBody
                title="Input Settings"
                initialOpen
            >

                <TextControl
                    label="Button text"
                    value={ buttonText }
                    onChange={ ( val ) => { setAttributes ( { buttonText: val })} }
                />

            </PanelBody>
        </InspectorControls>,

        <BlockControls>
        </BlockControls>,
    
        <div { ...blockProps } >

            <div class='pysarBlockSettings'>
                <p class="pysarBlockSettings__title">Submit Button</p>
                <p class="pysarBlockSettings__item">
                    <span class="pysarBlockSettings__itemTitle">Button text:</span> { buttonText }
                </p>
            </div>
            
        </div>


    ];
}