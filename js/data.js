'use strict';
const defaultPrograms={
A:{title:'Antrenman A • Güç Odaklı',subtitle:'Bileşik hareketler, kontrollü ağır yük',exercises:[
{name:'Bench Press',sets:4,reps:'5-8',rest:150,rir:'1-2 RIR',video:'https://www.youtube.com/results?search_query=bench+press+proper+form',note:'Kürek kemiklerini geriye-aşağı sabitle. Kalça sehpada kalsın.'},
{name:'Deadlift',sets:3,reps:'5',rest:180,rir:'2 RIR',video:'https://www.youtube.com/results?search_query=deadlift+proper+form',note:'Barı vücuda yakın tut. Form bozuluyorsa seti bitir; failure yok.'},
{name:'One Arm Dumbbell Row',sets:3,reps:'8-10',rest:90,rir:'1-2 RIR',video:'https://www.youtube.com/results?search_query=one+arm+dumbbell+row+form',note:'Gövdeyi döndürmeden dirseği kalçaya doğru çek.'},
{name:'Leg Press',sets:3,reps:'10-12',rest:120,rir:'1-2 RIR',video:'https://www.youtube.com/results?search_query=leg+press+proper+form',note:'Bel pedden ayrılmayacak derinlikte kontrollü in.'},
{name:'Seated Shoulder Press',sets:3,reps:'8-10',rest:105,rir:'1-2 RIR',video:'https://www.youtube.com/results?search_query=seated+shoulder+press+form',note:'Belini aşırı kamburlaştırma; dirsekleri doğal hatta tut.'},
{name:'Dumbbell Lateral Raise',sets:4,reps:'12-15',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=dumbbell+lateral+raise+proper+form',note:'Son sette ağırlığı düşürerek tek drop set uygulanabilir.'},
{name:'Rope Triceps Pushdown',sets:3,reps:'10-12',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=rope+triceps+pushdown+form',note:'Dirsekler gövde yanında sabit.'},
{name:'Incline Dumbbell Curl',sets:3,reps:'10-12',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=incline+dumbbell+curl+form',note:'Omuzları öne kaçırmadan tam esneme.'},
{name:'Hanging Knee Raise',sets:3,reps:'12-15',rest:60,rir:'Teknik sınır',video:'https://www.youtube.com/results?search_query=hanging+knee+raise+form',note:'Sallanma yerine pelvisi yukarı kıvır.'},
{name:'Eğimli Yürüyüş',sets:1,reps:'10-15 dk',rest:0,rir:'Nabız 120-140',video:'https://www.youtube.com/results?search_query=incline+treadmill+walking',note:'Ağırlık antrenmanından sonra orta tempo.'}
]},
B:{title:'Antrenman B • Hacim Odaklı',subtitle:'Kontrollü tekrar, kas hissi ve dengeli hacim',exercises:[
{name:'Bench Press',sets:3,reps:'8-12',rest:120,rir:'2 RIR',video:'https://www.youtube.com/results?search_query=bench+press+proper+form',note:'A gününden daha hafif yük; 2-3 saniyede kontrollü indir.'},
{name:'Lat Pulldown',sets:4,reps:'10-12',rest:90,rir:'1-2 RIR',video:'https://www.youtube.com/results?search_query=lat+pulldown+proper+form',note:'Dirsekleri aşağı ve hafif geriye sür.'},
{name:'Bulgarian Split Squat',sets:3,reps:'10 / bacak',rest:105,rir:'1-2 RIR',video:'https://www.youtube.com/results?search_query=bulgarian+split+squat+form',note:'Ön ayağa dengeli bas; diz ve ayak aynı yönde ilerlesin.'},
{name:'Leg Curl',sets:3,reps:'12-15',rest:75,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=leg+curl+proper+form',note:'Kalçayı pedden kaldırmadan sıkıştır.'},
{name:'Leg Extension',sets:3,reps:'12-15',rest:75,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=leg+extension+proper+form',note:'Son sette tek drop set yapılabilir; dizleri sert kilitleme.'},
{name:'Reverse Pec Deck',sets:3,reps:'12-15',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=reverse+pec+deck+form',note:'Arka omuz odaklı; kürek kemiklerini aşırı sıkıştırma.'},
{name:'Cable Lateral Raise',sets:4,reps:'15-20',rest:60,rir:'0-1 RIR',video:'https://www.youtube.com/results?search_query=cable+lateral+raise+form',note:'Son sette teknik bozulmadan failure uygulanabilir.'},
{name:'Overhead Rope Extension',sets:3,reps:'10-12',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=overhead+rope+triceps+extension+form',note:'Dirsekleri dar ve sabit tut.'},
{name:'Preacher Curl',sets:3,reps:'10-12',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=preacher+curl+proper+form',note:'Alt noktada dirseği sert kilitleme.'},
{name:'Cable Crunch',sets:3,reps:'12-15',rest:60,rir:'1 RIR',video:'https://www.youtube.com/results?search_query=cable+crunch+proper+form',note:'Kalçayı değil, göğüs kafesini pelvise yaklaştır.'},
{name:'Bisiklet Interval',sets:1,reps:'10 dk',rest:0,rir:'1 dk hızlı / 1 dk normal',video:'https://www.youtube.com/results?search_query=stationary+bike+interval+workout',note:'Ağırlık sonrası uygulanır.'}
]}}
