<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cameronb_redesignportfolio');

/** MySQL database username */
define('DB_USER', 'cameronb_new');

/** MySQL database password */
define('DB_PASSWORD', 'mapmaker4283');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'm]hUYP8,drL-S19+!(~||`46?(#Sm1@O?I7WdkH+ar<yZV7ow}9p#H,+Rjw+G|ZG');
define('SECURE_AUTH_KEY',  '$n~M->DwK+cQMX[ioo,#a#p{ ERZbE)[&|oX#! Z[K:Y^KPK*#{F SLhphg,xyAa');
define('LOGGED_IN_KEY',    'G4$k:Mv:<7[yZ>|pWaIxe OqQ)z`M)04E,HB[?JTJ%cU|xDsYE6TbNCY|TuFrwg8');
define('NONCE_KEY',        '#g(ragMc);zu(?|F=tXPmob1Ja.ve+S,77M|W54+3[UtPM*i?@a_UBqmGU#nB+zd');
define('AUTH_SALT',        'T7ubqv]$h%eQ:Pj|4Zgt1NCw|^:(~uz/*^x!Kd)caA>w~]5F;hr0M.&%4$>C}LMC');
define('SECURE_AUTH_SALT', '}PP|Ud-:vbkDe?KS>7Ub+i*5=XJZ=Q<^Ci>P]$lb>A$R|YIxzJc>~I+-7I~Jw{:f');
define('LOGGED_IN_SALT',   'Z&`&{4uT@-)|1KRtDZ^cP-R.1m|kFCuO-Q:pleFAu|6@U!Em;GMd/,Ve]k5qowC2');
define('NONCE_SALT',       'VZ -bby.G!_?+)^yZYM:ugW{SmCL@zQpyHlY4Rl$_#yUW+}>rfJHE~|f{x`e-*T)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
