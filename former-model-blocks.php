<?php
/**
 * Plugin Name:       FM Blocks
 * Plugin URI:        https://github.com/gcordner/former-model-blocks
 * Description:       Custom Gutenberg blocks.
 * Version:           0.1.0
 * Author:            Geoff Cordner
 * Author URI:        https://geoffcordner.net
 * Text Domain:       fm-blocks
 *
 * @package fm-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all blocks in the plugin.
 *
 * @return void
 */
function fm_blocks_register_all_blocks() {
	foreach ( glob( plugin_dir_path( __FILE__ ) . 'build/*/block.json' ) as $block_json ) {
		register_block_type( dirname( $block_json ) );
	}
}
add_action( 'init', 'fm_blocks_register_all_blocks' );
