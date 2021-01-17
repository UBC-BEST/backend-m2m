const int thumbPin = A0; // Pin connected to voltage divider output
const int indexPin = A1;
const int middlePin = A2;
const int ringPin = A3;
const int pinkyPin = A4;

float sensors[] = {0,0,0,0,0};

const float VCC = 4.98; // Measured voltage of Ardunio 5V line
const float R_DIV = 11300.0; // Measured resistance of 3.3k resistor

const float STRAIGHT_RESISTANCE = 416844; // resistance when straight
const float BEND_RESISTANCE = 877923; // resistance at 90 deg

void setup() 
{
  Serial.begin(9600);
}

void loop() 
{
    // read sensor values for each finger
  sensors[0] = R_DIV * (VCC / (analogRead(thumbPin) * VCC / 1023.0) - 1.0);
  sensors[1] = R_DIV * (VCC / (analogRead(indexPin) * VCC / 1023.0) - 1.0);
  sensors[2] = R_DIV * (VCC / (analogRead(middlePin) * VCC / 1023.0) - 1.0);
  sensors[3] = R_DIV * (VCC / (analogRead(ringPin) * VCC / 1023.0) - 1.0);
  sensors[4] = R_DIV * (VCC / (analogRead(pinkyPin) * VCC / 1023.0) - 1.0);

  Serial.print(sensors[0]);
  Serial.print(",");
  Serial.print(sensors[1]);
  Serial.print(",");
  Serial.print(sensors[2]);
  Serial.print(",");
  Serial.print(sensors[3]);
  Serial.print(",");
  Serial.print(sensors[4]);
  Serial.println();
  delay(100);
}
