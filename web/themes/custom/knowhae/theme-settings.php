<?php

/**
 * @file
 * Theme settings form for knowhae theme.
 */

use Drupal\file\Entity\File;
use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function knowhae_form_system_theme_settings_alter(&$form) {
  $form['knowhae'] = [
    '#type' => 'details',
    '#title' => t('Know HAE'),
    '#open' => FALSE,
  ];
  $form['knowhae']['hcp_logo'] = [
    '#type'          => 'managed_file',
    '#title'         => t('HCP Logo image'),
    '#default_value' => theme_get_setting('hcp_logo'),
    '#description'   => t("Use this field to upload HCP logo image."),
    '#upload_location' => 'public://',
    '#upload_validators' => [
      'file_validate_extensions' => ['gif png jpg jpeg svg'],
    ],
  ];

  $form['#submit'][] = 'knowhae_form_system_theme_settings_submit';

}

/**
 * Implements submit handler for theme settings form.
 */
function knowhae_form_system_theme_settings_submit($element, FormStateInterface $form_state) {
  $elmt = $element;
  $image_field = ['hcp_logo'];
  foreach ($image_field as $value) {
    $image = $form_state->getValue($value);
    if (!empty($image)) {
      $file = File::load($image[0]);
      $file->setPermanent();
      $file->save();
      $file_usage = \Drupal::service('file.usage');
      $file_usage->add($file, $value, $value, \Drupal::currentUser()->id());
    }
  }
}
