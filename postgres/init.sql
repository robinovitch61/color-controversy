
CREATE TABLE IF NOT EXISTS color (
  hex VARCHAR NOT NULL CHECK (hex <> '') PRIMARY KEY,
  first_option VARCHAR NOT NULL CHECK (first_option <> ''),
  second_option VARCHAR NOT NULL CHECK (second_option <> ''),
  n_first INT NOT NULL DEFAULT 0 CHECK (n_first >= 0),
  n_second INT NOT NULL DEFAULT 0 CHECK (n_second >= 0)
);

-- Red/Orange
INSERT INTO color (hex, first_option, second_option) VALUES ('#FC2700', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FC2C00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F83000', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F62D00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F22A00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EF2C00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EE2F00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EA3400', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E73000', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E42E00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E32D00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E12900', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DE2D00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D93000', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D62D00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D62C00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CE3000', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CD2B00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C92E00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D04C00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DD4E00', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E85000', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F35100', 'red', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FE5400', 'red', 'orange') RETURNING hex;

-- Pink/Red
INSERT INTO color (hex, first_option, second_option) VALUES ('#FC003E', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FE0042', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FC0049', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F30046', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EE0041', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EA003B', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E2003B', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DD0042', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DC0048', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D30049', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CF0041', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CF003B', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C6003E', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C40046', 'pink', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C4004E', 'pink', 'red') RETURNING hex;

-- Orange/Yellow
INSERT INTO color (hex, first_option, second_option) VALUES ('#FDB500', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FDB100', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FDAC00', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F7AA00', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F5AE00', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EFB000', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E8AD00', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E9A900', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E9A100', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E39F00', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E1A400', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E0A900', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DCA900', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DCA300', 'orange', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DC9D00', 'orange', 'yellow') RETURNING hex;

-- Green/Blue
INSERT INTO color (hex, first_option, second_option) VALUES ('#009368', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#009070', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#008E78', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#008B81', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#008787', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00868E', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#008395', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#008D9F', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00959A', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#009A95', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#009E93', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00A38D', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00A887', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00AE83', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B47D', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B779', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00C380', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00C18D', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00C095', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00BE9E', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00BCA2', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00BAA7', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B8AF', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B3B8', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00C3BD', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00C9B8', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00D0B1', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00D6A9', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00DDA4', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00E1A0', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00E89A', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F39F', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F1A7', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F0AF', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00EEB9', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00EEC0', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00EEC6', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00FBC6', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00FCBB', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00FDB1', 'green', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00FDA8', 'green', 'blue') RETURNING hex;

-- Yellow/Green
INSERT INTO color (hex, first_option, second_option) VALUES ('#A8CA00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#ACCA00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B3CD00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B9D500', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B1D700', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A9D700', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A4DB00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A5E100', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#ADE600', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B5E800', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B9F100', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B3F400', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#AAF400', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A6F800', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#AFFE00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BBFD00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C1FB00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BBF500', 'yellow', 'green') RETURNING hex;

-- Purple/Pink
INSERT INTO color (hex, first_option, second_option) VALUES ('#B200A0', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B9009E', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C0009A', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C800A3', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C600AF', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BF00BB', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C600C6', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D100CB', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DD00CD', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E400DA', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DB00E9', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CF00F0', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D500FC', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E400FD', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F400F7', 'purple', 'pink') RETURNING hex;

-- Blue/Purple
INSERT INTO color (hex, first_option, second_option) VALUES ('#5400FD', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5D00FD', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#6700FA', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#6300EC', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5A00EB', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4D00E7', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4600D9', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4C00D5', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5600D5', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5000C7', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4800C4', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#3900C4', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#3500B8', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#3B00B2', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4C00AE', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4900A0', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#3300A4', 'blue', 'purple') RETURNING hex;
