import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes ={
    q1:[
        {
          'question':'if 5+3+2=151022, 9+2+4=183652, 8+6+3=482466 then 7+2+5= ?',
          'a':'a) 143547',
          'b':'b) 132234',
          'c':'c) 2577224',
          'd':'d) 112321',
          'correct':"a"
        },
        {
           'question':'If in a certain code "RANGE" is coded as 12345 and "RANDOM" is coded as 123678 then "MANGO" would be',
           'a':'a) 89343',
           'b':'b) 84629',
           'c':'c) 82347',
           'd':'d) 83274',
           'correct':"c"
        },
        {
            'question':'COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code langauge',
            'a':'a) MFEDJJOE',
            'b':'b) EOJDEJFM',
            'c':'c) MFEJDJOE',
            'd':'d) EOJDJEFM',
            'correct':"d"
         },
         {
            'question':'If 9X7=3545 and 4X3=1520 then 6X8=?',
            'a':'a) 5040',
            'b':'b) 6050',
            'c':'c) 4030',
            'd':'d) 3040',
            'correct':"c"
         },
         {
            'question':'BEAN =ABNE  and SALE=LSEA then NEWS=?',
            'a':'a) NWES',
            'b':'b) WNSE',
            'c':'c) ESWN',
            'd':'d) SWNE',
            'correct':"b"
         },
         {
            'question':'FIG : EGHJFH :: BIN : ?',
            'a':'a) CAJHOM',
            'b':'b) CAHJMOC',
            'c':'c) ACJHMO',
            'd':'d) ACHJMO',
            'correct':"d"
         },
         {
            'question':'CAT=3120 and DOG=4157 then 25144=?',
            'a':'a) BEND',
            'b':'b) BEADD',
            'c':'c) YADD OR YND',
            'd':'d) can`t  be determined',
            'correct':"d"
         },
         {
            'question':'If A=26, DOT=42 then CONE=?',
            'a':'a) 52',
            'b':'b) 71',
            'c':'c) 67',
            'd':'d) none',
            'correct':"b"
         },
         {
            'question':'If 264*2=6, 870*3=11 then 735*5=?',
            'a':'a) 8',
            'b':'b) 21',
            'c':'c) 12',
            'd':'d) 18',
            'correct':"c"
         },
         {
            'question':'If MOUSE=41 and RATE=6 then NETWORK=?',
            'a':'a) 20',
            'b':'b) 25',
            'c':'c) 55',
            'd':'d) 60',
            'correct':"a"
         },
         // {
         //    'question':'Z,U,Q, _ , L',
         //    'a':'a) M',
         //    'b':'b) N',
         //    'c':'c) O',
         //    'd':'d) I',
         //    'correct':"b"
         // }
    ],
    q2:[
        {
            'question':'Introducing a boy ,Amarjeet says, "HE is the son of the daughter of my father".How is boy related to the Amarjeet .',
            'a':'a) Nephew',
            'b':'b) Maternal uncle',
            'c':'c) Son',
            'd':'d) cannot be determined',
            'correct':"d"
         },
         {
            'question':'Introducing a boy Ankit said,"he is the son of daughter of my parental grandfather`s son.How is that boy related to ankit ',
            'a':'a) cousin',
            'b':'b) brother',
            'c':'c) father-in-law',
            'd':'d) Nephew',
            'correct':"d"
         },
         {
            'question':'Introducing a girl ,Sangeeta says,"She is the daughter of the brother-in-law of my husband.How is the girl related to daughter.',
            'a':'a) Niece',
            'b':'b) Daughter',
            'c':'c) Sister',
            'd':'d) Cousin',
            'correct':"a"
         },
         {
            'question':'P and Q are sister. R and S are brother`s. P`s daughter is R`s sister.What is Q`s relation to S.',
            'a':'a) Mother',
            'b':'b) Grandmother',
            'c':'c) Aunt',
            'd':'d) Sister',
            'correct':"c"
         },
         {
            'question':'Raman is Sunaina`s father and Sunaina is Vidur`s wife. Saksham is the  father of Vidur`s father.How is Saksham realted to Sunaina.',
            'a':'a) Father-in-law',
            'b':'b) Grandfather-in-law',
            'c':'c) Son',
            'd':'d) Husband',
            'correct':"b"
         },
         {
            'question':'Introducing a girl a man says, She is the daughter of the daughter of my wife. How is man related to the girl.',
            'a':'a) Maternal uncle',
            'b':'b) Father',
            'c':'c) Son',
            'd':'d) Maternal grandfather',
            'correct':"d"
         },
         
         {
            'question':'Raman is Sunaina`s father and Sunaina is Vidur`s wife. Saksham is the  father of Vidur`s father.How is Saksham realted to Sunaina.',
            'a':'a) Father-in-law',
            'b':'b) Grandfather-in-law',
            'c':'c) Son',
            'd':'d) Husband',
            'correct':"b"
         },
         {
            'question':'Raman is Sunaina`s father and Sunaina is Vidur`s wife. Saksham is the  father of Vidur`s father.How is Saksham realted to Sunaina.',
            'a':'a) Father-in-law',
            'b':'b) Grandfather-in-law',
            'c':'c) Son',
            'd':'d) Husband',
            'correct':"b"
         },
         {
            'question':'Raman is Sunaina`s father and Sunaina is Vidur`s wife. Saksham is the  father of Vidur`s father.How is Saksham realted to Sunaina.',
            'a':'a) Father-in-law',
            'b':'b) Grandfather-in-law',
            'c':'c) Son',
            'd':'d) Husband',
            'correct':"b"
         },
         {
            'question':'Raman is Sunaina`s father and Sunaina is Vidur`s wife. Saksham is the  father of Vidur`s father.How is Saksham realted to Sunaina.',
            'a':'a) Father-in-law',
            'b':'b) Grandfather-in-law',
            'c':'c) Son',
            'd':'d) Husband',
            'correct':"b"
         }
    
    ],
    q7:[
      {
        'question':'3,7,23,95,?',
        'a':'a) 62',
        'b':'b) 128',
        'c':'c) 479',
        'd':'d) 565',
        'correct':"c"
      },
      {
         'question':'9,27,31,155,161,1127,?',
         'a':'a) 316',
         'b':'b) 1135',
         'c':'c) 1288',
         'd':'d) 2254',
         'correct':"b"
      },
      {
         'question':'1,1,2,6,24,_,720',
         'a':'a) 100',
         'b':'b) 104',
         'c':'c) 108',
         'd':'d) 120',
         'correct':"d"
      },
      {
         'question':'1,2,5,12,27,58,121,?',
         'a':'a) 246',
         'b':'b) 247',
         'c':'c) 248',
         'd':'d) 249',
         'correct':"c"
      },
       {
         'question':'1,6,15,_,45,66,91',
         'a':'a) 25',
         'b':'b) 26',
         'c':'c) 27',
         'd':'d) 28',
         'correct':"d"
      },
      {
         'question':'3,5,9,15,25,41,67,?',
         'a':'a) 108',
         'b':'b) 109',
         'c':'c) 110',
         'd':'d) 111',
         'correct':"b"
      },
      {
         'question':'11,45,182,731,?',
         'a':'a) 2920',
         'b':'b) 2924',
         'c':'c) 2927',
         'd':'d) 2928',
         'correct':"d"
      }, 
      {
         'question':'41,54,85,98,129,?',
         'a':'a) 142',
         'b':'b) 152',
         'c':'c) 146',
         'd':'d) 156',
         'correct':"a"
      },
      {
         'question':'11,110,990,7920,?',
         'a':'a) 55480',
         'b':'b) 55640',
         'c':'c) 55440',
         'd':'d) 44550',
         'correct':"c"
      },
      {
         'question':'16,31,61,121,?',
         'a':'a) 241',
         'b':'b) 261',
         'c':'c) 249',
         'd':'d) 253',
         'correct':"a"
      },
      // {
      //    'question':'46,110,121,242,484,?',
      //    'a':'a) 968',
      //    'b':'b) 869',
      //    'c':'c) 689',
      //    'd':'d) 589',
      //    'correct':"a"
      // },
  ],
    
}


export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    const [timer,setTimer]=useState(20);
    const [data,setData]=useState(0);
    const [choose,setChoose]=useState(0);
    const [changetimer,setChangetimer]=useState(30)
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect,
            timer,setTimer,data,setData,choose,setChoose,changetimer,setChangetimer
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };