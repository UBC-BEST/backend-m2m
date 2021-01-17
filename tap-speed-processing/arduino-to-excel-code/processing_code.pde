/* 
  Saving Values from Arduino to a .csv File Using Processing - Pseduocode
 
  This sketch provides a basic framework to read data from Arduino over the serial port and save it to .csv file on your computer.
  The .csv file will be saved in the same folder as your Processing sketch.
  This sketch takes advantage of Processing 2.0's built-in Table class.
  This sketch assumes that values read by Arduino are separated by commas, and each Arduino reading is separated by a newline character.
  Each reading will have it's own row and timestamp in the resulting csv file. This sketch will write a new file a set number of times. Each file will contain all records from the beginning of the sketch's run.  
  This sketch pseduo-code only. Comments will direct you to places where you should customize the code.
  This is a beginning level sketch.
 
  The hardware:
  * Sensors connected to Arduino input pins
  * Arduino connected to computer via USB cord
        
  The software:
  *Arduino programmer
  *Processing (download the Processing software here: https://www.processing.org/download/
  *Download the Software Serial library from here: http://arduino.cc/en/Reference/softwareSerial
 
  Created 12 November 2014
  By Elaine Laguerta
  http://url/of/online/tutorial.cc
 
*/
 
import processing.serial.*;
Serial myPort; //creates a software serial port on which you will listen to Arduino
Table table; //table where we will read in and store values. You can name it something more creative!
String val;

int numReadings = 1; //keeps track of how many readings you'd like to take before writing the file. 
int readingCounter = 0; //counts each reading to compare to numReadings. 

String fileName;
void setup()
{
  table = new Table();
  myPort = new Serial(this, "COM4", 9600); //set up your port to listen to the serial port
   
  //table.addColumn("id"); //This column stores a unique identifier for each record. We will just count up from 0 - so your first reading will be ID 0, your second will be ID 1, etc. 
  
  //the following adds columns for time. You can also add milliseconds. See the Time/Date functions for Processing: https://www.processing.org/reference/ 
  table.addColumn("Time");
  
  //the following are dummy columns for each data value. Add as many columns as you have data values. Customize the names as needed. Make sure they are in the same order as the order that Arduino is sending them!
  table.addColumn("Thumb");
  table.addColumn("Index");
  table.addColumn("Middle");
  table.addColumn("Ring");
  table.addColumn("Pinky"); 
}
 
void draw(){
  val = myPort.readStringUntil('\n'); //The newline separator separates each Arduino loop. We will parse the data by each newline separator. 
  if (val!= null) { //We have a reading! Record it.
    val = trim(val); //gets rid of any whitespace or Unicode nonbreakable space
    println(val); //Optional, useful for debugging. If you see this, you know data is being sent. Delete if  you like. 
    float sensors[] = float(split(val, ',')); //parses the packet from Arduino and places the valeus into the sensorVals array. I am assuming floats. Change the data type to match the datatype coming from Arduino. 
   
    TableRow newRow = table.addRow(); //add a row for this new reading
    //newRow.setInt("id", table.lastRowIndex());//record a unique identifier (the row's index)
    
    //record time stamp
    newRow.setInt("Time", millis());
 
    
    //record sensor information. Customize the names so they match your sensor column names. 
    newRow.setFloat("Thumb", sensors[0]);
    newRow.setFloat("Index", sensors[1]);
    newRow.setFloat("Middle", sensors[2]);
    newRow.setFloat("Ring", sensors[3]);
    newRow.setFloat("Pinky", sensors[4]);

    
    readingCounter++; //optional, use if you'd like to write your file every numReadings reading cycles
    
    //saves the table as a csv in the same folder as the sketch every numReadings. 
    if (readingCounter % numReadings == 0)//The % is a modulus, a math operator that signifies remainder after division. The if statement checks if readingCounter is a multiple of numReadings (the remainder of readingCounter/numReadings is 0)
    {
      fileName = str(year()) + str(month()) + str(day()) + "_mix_sec.csv"; //this filename is of the form year+month+day+readingCounter
      saveTable(table, fileName); //Woo! save it to your computer. It is ready for all your spreadsheet dreams. 
    }
   }
}
