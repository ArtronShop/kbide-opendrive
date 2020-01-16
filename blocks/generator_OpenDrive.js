var ledc_ch = [ 10, 11, 12, 13 ];

Blockly.JavaScript['opendrive_setup'] = function(block) {
    var dropdown_in1a = block.getFieldValue('IN1A');
    var dropdown_in1b = block.getFieldValue('IN1B');
    var dropdown_in2a = block.getFieldValue('IN2A');
    var dropdown_in2b = block.getFieldValue('IN2B');
    var code = `
    ledcSetup(${ledc_ch[0]}, 500, 10);
    ledcAttachPin(${dropdown_in1a}, ${ledc_ch[0]});
    ledcSetup(${ledc_ch[1]}, 500, 10);
    ledcAttachPin(${dropdown_in1b}, ${ledc_ch[1]});
    ledcSetup(${ledc_ch[2]}, 500, 10);
    ledcAttachPin(${dropdown_in2a}, ${ledc_ch[2]});
    ledcSetup(${ledc_ch[3]}, 500, 10);
    ledcAttachPin(${dropdown_in2b}, ${ledc_ch[3]});
    `;
    return code;
};

Blockly.JavaScript['opendrive_move_forward'] = function(block) {
    var number_power = block.getFieldValue('power');
    var number_time = block.getFieldValue('time');
    var code = `
    ledcWrite(${ledc_ch[0]}, (100 - ${number_power}) / 100.0 * 1023.0);
    ledcWrite(${ledc_ch[1]}, 1023);
    ledcWrite(${ledc_ch[2]}, (100 - ${number_power}) / 100.0 * 1023.0);
    ledcWrite(${ledc_ch[3]}, 1023);
    delay(${number_time} * 1000.0);
    ledcWrite(${ledc_ch[0]}, 1023);
    ledcWrite(${ledc_ch[1]}, 1023);
    ledcWrite(${ledc_ch[2]}, 1023);
    ledcWrite(${ledc_ch[3]}, 1023);
    `;
    return code;
};

Blockly.JavaScript['opendrive_move_backward'] = function(block) {
    var number_power = block.getFieldValue('power');
    var number_time = block.getFieldValue('time');
    var code = `
    ledcWrite(${ledc_ch[0]}, 1023);
    ledcWrite(${ledc_ch[1]}, (100 - ${number_power}) / 100.0 * 1023.0);
    ledcWrite(${ledc_ch[2]}, 1023);
    ledcWrite(${ledc_ch[3]}, (100 - ${number_power}) / 100.0 * 1023.0);
    delay(${number_time} * 1000.0);
    ledcWrite(${ledc_ch[0]}, 1023);
    ledcWrite(${ledc_ch[1]}, 1023);
    ledcWrite(${ledc_ch[2]}, 1023);
    ledcWrite(${ledc_ch[3]}, 1023);
    `;
    return code;
};

Blockly.JavaScript['opendrive_move'] = function(block) {
    var dropdown_move = block.getFieldValue('move');
    var number_power = block.getFieldValue('power');
    var code = '';
    if (dropdown_move == 1) { // forward
        code = `
        ledcWrite(${ledc_ch[0]}, (100 - ${number_power}) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[1]}, 1023);
        ledcWrite(${ledc_ch[2]}, (100 - ${number_power}) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[3]}, 1023);
        `;
    } else if (dropdown_move == 2) { // backward
        code = `
        ledcWrite(${ledc_ch[0]}, 1023);
        ledcWrite(${ledc_ch[1]}, (100 - ${number_power}) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[2]}, 1023);
        ledcWrite(${ledc_ch[3]}, (100 - ${number_power}) / 100.0 * 1023.0);
        `;
    } else if (dropdown_move == 3) { // turn left
        code = `
        ledcWrite(${ledc_ch[0]}, 1023);
        ledcWrite(${ledc_ch[1]}, 1023);
        ledcWrite(${ledc_ch[2]}, (100 - ${number_power}) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[3]}, 1023);
        `;
    } else if (dropdown_move == 4) { // turn right
        code = `
        ledcWrite(${ledc_ch[0]}, (100 - ${number_power}) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[1]}, 1023);
        ledcWrite(${ledc_ch[2]}, 1023);
        ledcWrite(${ledc_ch[3]}, 1023);
        `;
    }
    return code; 
};

Blockly.JavaScript['opendrive_move_wheel'] = function(block) {
    var number_power1 = block.getFieldValue('power1');
    var number_power2 = block.getFieldValue('power2');
    var code = '';
    if (number_power1 > 0) {
        code += `
        ledcWrite(${ledc_ch[0]}, (100 - abs(${number_power})) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[1]}, 1023);
        `;
    } else {
        code += `
        ledcWrite(${ledc_ch[0]}, 1023);
        ledcWrite(${ledc_ch[1]}, (100 - abs(${number_power})) / 100.0 * 1023.0);
        `;
    }
    if (number_power2 > 0) {
        code += `
        ledcWrite(${ledc_ch[2]}, (100 - abs(${number_power})) / 100.0 * 1023.0);
        ledcWrite(${ledc_ch[3]}, 1023);
        `;
    } else {
        code += `
        ledcWrite(${ledc_ch[2]}, 1023);
        ledcWrite(${ledc_ch[3]}, (100 - abs(${number_power})) / 100.0 * 1023.0);
        `;
    }
    return code;
};

Blockly.JavaScript['opendrive_stop'] = function(block) {
    var code = `
    ledcWrite(${ledc_ch[0]}, 1023);
    ledcWrite(${ledc_ch[1]}, 1023);
    ledcWrite(${ledc_ch[2]}, 1023);
    ledcWrite(${ledc_ch[3]}, 1023);
    `;
    return code;
};
