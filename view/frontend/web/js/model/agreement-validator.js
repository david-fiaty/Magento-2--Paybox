/**
 * Naxero.com Magento 2 Paybox Payment.
 *
 * PHP version 7
 *
 * @category  Naxero
 * @package   Paybox
 * @author    Naxero Development Team <contact@naxero.com>
 * @copyright 2019 Naxero.com all rights reserved
 * @license   https://opensource.org/licenses/mit-license.html MIT License
 * @link      https://www.naxero.com
 */

define(
    [
        'jquery',
        'mage/validation'
    ],
    function ($) {
        'use strict';
        var checkoutConfig = window.checkoutConfig,
            agreementsConfig = checkoutConfig ? checkoutConfig.checkoutAgreements : {};

        var agreementsInputPath = '.payment-method._active div.checkout-agreements input';

        return {
            /**
             * Validate checkout agreements
             *
             * @returns {boolean}
             */
            validate: function () {

                if (!agreementsConfig.isEnabled) {
                    return true;
                }

                if ($(agreementsInputPath).length == 0) {
                    return true;
                }

                return $('#co-payment-form').validate(
                    {
                        errorClass: 'mage-error',
                        errorElement: 'div',
                        meta: 'validate',
                        errorPlacement: function (error, element) {
                            var errorPlacement = element;
                            if (element.is(':checkbox') || element.is(':radio')) {
                                errorPlacement = element.siblings('label').last();
                            }
                            errorPlacement.after(error);
                        }
                    }
                ).element(agreementsInputPath);
            }
        }
    }
);