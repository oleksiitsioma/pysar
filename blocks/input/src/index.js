import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import './style.scss';

registerBlockType( 'pysar/input', {
	edit: Edit,
	save: Save,
} );
