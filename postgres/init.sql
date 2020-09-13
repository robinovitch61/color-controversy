
CREATE TABLE IF NOT EXISTS color (
  hex VARCHAR NOT NULL CHECK (hex <> '') PRIMARY KEY,
  first_option VARCHAR NOT NULL CHECK (first_option <> ''),
  second_option VARCHAR NOT NULL CHECK (second_option <> ''),
  n_first INT NOT NULL DEFAULT 10 CHECK (n_first >= 0),
  n_second INT NOT NULL DEFAULT 10 CHECK (n_second >= 0)
);

INSERT INTO color (hex, first_option, second_option) VALUES ('#009CBB', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#009BAE', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#009B9D', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#009A8E', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B9CF', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B9C4', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B8B3', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00B8A3', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00D8E4', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00D7D8', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00D7C8', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00D6B5', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F6E7', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F5D8', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F5C8', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#00F4B7', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#C6E000', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D3DD00', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DADB00', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E8D600', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D0F000', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DAEE00', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E3EB00', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EFE700', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E5FD00', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F4E500', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F6F800', 'green', 'yellow') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FBBA00', 'yellow', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EFBF00', 'yellow', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F49200', 'yellow', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DE9E00', 'yellow', 'orange') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FD5300', 'orange', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FB5500', 'orange', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E32400', 'orange', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D63D00', 'orange', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D80000', 'orange', 'red') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F90052', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F60067', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F20084', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E0137F', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F1007B', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DA0071', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#FA879B', 'red', 'pink') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CB00F0', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DE00EE', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#ED00DE', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#D400D3', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#CC64F0', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#DF53F2', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#EA4CE0', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#E64EE6', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F380ED', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#F000ED', 'pink', 'purple') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9C7FF3', 'purple', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9282F4', 'purple', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#A247F7', 'purple', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9651F5', 'purple', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9D00F8', 'purple', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9200F0', 'purple', 'blue') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#7300F7', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#6E00CF', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9980F1', 'blue', 'green') RETURNING hex;
INSERT INTO color (hex, first_option, second_option) VALUES ('#9084EC', 'blue', 'green') RETURNING hex;
