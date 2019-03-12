/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Controller from '../components/Controller.vue'

storiesOf('Header Bar', module)
    .add('1234', () => ({
        components: { Controller },
        template: '<controller></controller>',
    }), { notes: 'A very simple component' })
    .add('with JSX', () => ({
        components: { Controller },
        template: '<controller></controller>',
        methods: { action: linkTo('Button', 'with some emoji') },
    }))
    .add('with some emoji', () => ({
        components: { Controller },
        template: '<my-button @click="action"></my-button>',
        methods: { action: action('clicked') }
    }))