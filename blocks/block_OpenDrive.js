Blockly.Blocks['opendrive_setup'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("OpenDrive setup at 1: (A :")
            .appendField(new Blockly.FieldDropdown([["23","23"], ["OUT1","26"], ["OUT2","27"], ["DAC1","25"], ["18","18"], ["19","19"]]), "IN1A")
            .appendField(", B :")
            .appendField(new Blockly.FieldDropdown([["OUT2","27"], ["OUT1","26"], ["DAC1","25"], ["18","18"], ["19","19"], ["23","23"]]), "IN1B")
            .appendField("), 2 : (A :")
            .appendField(new Blockly.FieldDropdown([["19","19"], ["OUT1","26"], ["OUT2","27"], ["DAC1","25"], ["18","18"], ["23","23"]]), "IN2A")
            .appendField(", B :")
            .appendField(new Blockly.FieldDropdown([["18","18"], ["OUT1","26"], ["OUT2","27"], ["DAC1","25"], ["19","19"], ["23","23"]]), "IN2B")
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Config pin connect between OpenDrive and OpenKB");
        this.setHelpUrl("https://opendrive.ioxhop.info/program/kbide");
    }
};

Blockly.Blocks['opendrive_move_forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move forward at power")
            .appendField(new Blockly.FieldNumber(50, 0, 100, 1), "power")
            .appendField("% for ")
            .appendField(new Blockly.FieldNumber(1, 0), "time")
            .appendField("secs");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Move car forward with fix time");
        this.setHelpUrl("https://opendrive.ioxhop.info/program/kbide");
    }
};

Blockly.Blocks['opendrive_move_backward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("move backward at power")
            .appendField(new Blockly.FieldNumber(50, 0, 100, 1), "power")
            .appendField("% for ")
            .appendField(new Blockly.FieldNumber(1, 0), "time")
            .appendField("secs");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Move car backward with fix time");
        this.setHelpUrl("https://opendrive.ioxhop.info/program/kbide");
    }
};

Blockly.Blocks['opendrive_move'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["move forward","1"], ["move backward","2"], ["turn left","3"], ["turn right","4"]]), "move")
            .appendField("at power")
            .appendField(new Blockly.FieldNumber(50, 0, 100, 1), "power")
            .appendField("%");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Move car forward/backward/left/right");
        this.setHelpUrl("https://opendrive.ioxhop.info/program/kbide");
    }
  };

Blockly.Blocks['opendrive_move_wheel'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("left wheel turns at power")
            .appendField(new Blockly.FieldNumber(50, -100, 100, 1), "power1")
            .appendField("%, right wheel turns at power")
            .appendField(new Blockly.FieldNumber(50, -100, 100, 1), "power2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Move car with fix wheel speed");
        this.setHelpUrl("https://opendrive.ioxhop.info/program/kbide");
    }
  };

Blockly.Blocks['opendrive_stop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("stop moving");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Car stop moving");
        this.setHelpUrl("https://opendrive.ioxhop.info/program/kbide");
    }
  };
