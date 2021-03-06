<?php
/*
  Plugin Name: mytheme-blocks
  Description: blocks for mytheme
  Author: Ozzy Gonzalez
*/

if (!defined('ABSPATH')) {
  exit;
}

function mytheme_blocks_register_block_type($block, $options = array())
{
  register_block_type(
    'mytheme-blocks/' . $block,
    array_merge(
      array(
        'editor_script' => 'mytheme-blocks-editor-script',
        'editor_style' => 'mytheme-blocks-editor-styles',
        'script' => 'mytheme-blocks-script',
        'style' => 'mytheme-blocks-styles'
      ),
      $options
    )
  );
}

function mytheme_blocks_register()
{
  wp_register_script(
    'mytheme-blocks-editor-script',
    plugins_url('dist/editor.js', __FILE__),
    array(
      'wp-blocks',
      'wp-i18n',
      'wp-element',
      'wp-components',
      'wp-block-editor',
      'lodash'
    )
  );

  wp_register_script(
    'mytheme-blocks-script',
    plugins_url('dist/script.js', __FILE__),
    array('jquery')
  );

  wp_register_style(
    'mytheme-blocks-editor-styles',
    plugins_url('dist/editor.css', __FILE__),
    array(
      'wp-edit-blocks'
    )
  );

  wp_register_style(
    'mytheme-blocks-styles',
    plugins_url('dist/style.css', __FILE__)
  );

  mytheme_blocks_register_block_type('firstblock');
  mytheme_blocks_register_block_type('secondblock');
}

add_action('init', 'mytheme_blocks_register');
