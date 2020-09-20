
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

-- Blue/Purple
INSERT INTO color (hex, first_option, second_option) VALUES ('#2C007B', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#2F007C', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#360080', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#3A008A', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#380090', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#370099', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#3B00A0', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4000A0', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4700A4', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4800AD', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4600B5', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4000B7', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4700C4', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#4E00C4', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5300C4', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5800CE', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5500D2', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5200D6', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5400DE', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5900DF', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5D00E0', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#6200ED', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5F00EF', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5900F0', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#5D00FB', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#6400FD', 'blue', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#6900FC', 'blue', 'purple') RETURNING hex;

-- Purple/Pink
INSERT INTO color (hex, first_option, second_option) VALUES ('#D300FE', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DA00FD', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E100FC', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DF00F4', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DB00F0', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D300E8', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CF00DF', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D200D8', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D400D0', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D000CA', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CC00C8', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C400C3', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C200BA', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C300B3', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C500AD', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C200A6', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BE00A4', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BA00A0', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B60097', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B70092', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B9008A', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B60080', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B10080', 'purple', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#AC007E', 'purple', 'pink') RETURNING hex;

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

-- Yellow/Green
INSERT INTO color (hex, first_option, second_option) VALUES ('#ABAF00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A5B600', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A2BA00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#ABC100', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B0C500', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B1CC00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#AECE00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A7D300', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A4DB00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#AAE300', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B2EB00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B3F400', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A9F400', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A2F400', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#98F300', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B4FA00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#ACFA00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BEFC00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B3B000', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#B8B600', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#BFC100', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C3CF00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C4DC00', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CAE800', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D2F800', 'yellow', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DAFD00', 'yellow', 'green') RETURNING hex;

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
