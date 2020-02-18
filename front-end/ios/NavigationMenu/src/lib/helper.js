import _ from 'lodash';
import { SITE_URL, API_URL, DEFAULT_PROFILE } from '../config';

export function channingActions(currentActions, dispatch, ...actionGenerators) {
    return actionGenerators.reduce((accActions, actionGenerator) => {
        return {
            ...actionGenerator(accActions, dispatch),
        };
    }, currentActions);
}

export function generateOnChangeInput(fieldName, context) {
    return {
        onChange: event =>
            context.setState({ [fieldName]: event.target.value }),
        value: context.state[fieldName],
    };
}

export function generateOnChangeDatePicker(fieldName, context) {
    return date => context.setState({ [fieldName]: date });
}

export function generateOnChangeInputNumber(
    fieldName,
    context,
    isInteger = false
) {
    return value =>
        context.setState({ [fieldName]: isInteger ? _.floor(value) : value });
}

export function generateOnChangeSwitch(fieldName, context) {
    return checked => context.setState({ [fieldName]: checked });
}

export function loadClientScript(d, s, id, path) {
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = path;
    fjs.parentNode.insertBefore(js, fjs);
}

export function loadScriptAsync(src) {
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
    });
}

export function getMediaURL(src, alt = DEFAULT_PROFILE.PICTURE) {
    return src ? `${API_URL}${src}` : `${SITE_URL}${alt}`;
}
