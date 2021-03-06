<?php
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

namespace Naxero\Paybox\Model\Adminhtml\Source;

class Environment implements \Magento\Framework\Option\ArrayInterface
{

    const ENVIRONMENT_PROD = 'prod';
    const ENVIRONMENT_TEST = 'test';
    const ENVIRONMENT_SIMU = 'simu';

    /**
     * Possible environment types
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            [
                'value' => self::ENVIRONMENT_SIMU,
                'label' => __('Simulation'),
            ],
            [
                'value' => self::ENVIRONMENT_TEST,
                'label' => __('Test'),
            ],
            [
                'value' => self::ENVIRONMENT_PROD,
                'label' => __('Production'),
            ],
        ];
    }
}
