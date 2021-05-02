<?php
/**
 * Template Name: Template Home
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

?>

<div class="cursor"></div>

<div class="home-banner">
  <img id="module" src="<?php echo get_template_directory_uri(); ?>/img/space-module.png" alt="Space Module">
  <h1>A Far-Out<br>Experience</h1>
</div>

<div class="wrapper body purple">
  <div class="inner">
    <h1>Experience the Galaxy<br>in a whole new light</h1>
  </div>
</div>

<?php require 'D:/XAMPP/htdocs/wp_dev/wp-content/themes/my-theme/discovery.php'; ?>


<div class="wrapper body pricing">
  <div class="inner">
    <h1>Packages</h1>
    <div class="cards">
      <div class="card">
        <div class="description">
          <h2>Lunar</h2>
          <p>Trip around the moon</p>
        </div>
        <div class="features">
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>6 Days</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>Luxury Transport</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>Exquisite Dining</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>3 spacewalks</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="description">
          <h2>Jupiter</h2>
          <p>Round trip to Jupiter</p>
        </div>
        <div class="features">
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>4 Months</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>Luxury Transport</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>Exquisite Dining</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>5 spacewalks</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="description">
          <h2>Milky Way</h2>
          <p>Explore the entire Galaxy</p>
        </div>
        <div class="features">
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>3.5 Years</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>Luxury Transport</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>Exquisite Dining</p>
          </div>
          <div class="feat">
            <p><span class="dashicons dashicons-saved"></span>10 spacewalks</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<?php require 'D:/XAMPP/htdocs/wp_dev/wp-content/themes/my-theme/contact-form.php'; ?>


<?php
get_footer();
