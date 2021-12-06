<?php /** @noinspection PhpUnhandledExceptionInspection */
/**
 * Plugin Name: SVG Map Animations
 * Description: Lorem ipsum
 * Version: 1.0.0
 * Author: Olah Team
 * Text Domain: svg-map-animations
 */

if ( ! defined( 'OLAH_PLUGIN_URL' ) ) {
  define( 'OLAH_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

class OlahReact {

  public static function getInstance() {

    // create an object
    null === self::$instance and self::$instance = new self;

    return self::$instance; // return the object
  }

  public function __construct() {
    add_action( 'enqueue_scripts', array( $this, 'enqueueReactScripts' ) );
  }

  function enqueueReactScripts( $screen ) {
    wp_enqueue_media();
    $assetManifest = $this->getAssetManifest();
    foreach ( $assetManifest as $index => $entry ) {
      wp_enqueue_script( 'olah-admin-' . $index, $entry, ['jquery'], '', true );
    }
  }

  private function getAssetManifest(): array {
    $json = json_decode( file_get_contents( $this->getAssetManifestHost() . 'asset-manifest.json' ), true );

    return array_map( function ( $entry ) {
      return $this->getScriptSourceHost() . $entry;
    }, $json['entrypoints'] );
  }

  private function getScriptSourceHost(): string {
      return OLAH_PLUGIN_URL . 'build/';
  }

  private function getAssetManifestHost(): string {
      return OLAH_PLUGIN_DIR . '/build/';
  }
}

\OlahReact::getInstance();