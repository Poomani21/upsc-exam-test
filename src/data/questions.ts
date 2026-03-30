export interface Question {
  id: string;
  subject: string;
  chapter: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  chapters: string[];
  color: string;
  totalQuestions: number;
}

export const subjects: Subject[] = [
  {
    id: 'history',
    name: 'Indian History',
    icon: '🏛️',
    chapters: ['Ancient India', 'Medieval India', 'Modern India', 'Art & Culture', 'Freedom Struggle'],
    color: 'from-amber-500 to-orange-600',
    totalQuestions: 3000,
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    chapters: ['Physical Geography', 'Indian Geography', 'World Geography', 'Climatology', 'Oceanography'],
    color: 'from-emerald-500 to-green-600',
    totalQuestions: 3000,
  },
  {
    id: 'polity',
    name: 'Indian Polity',
    icon: '⚖️',
    chapters: ['Constitution', 'Parliament', 'Judiciary', 'State Government', 'Local Government'],
    color: 'from-blue-500 to-indigo-600',
    totalQuestions: 3000,
  },
  {
    id: 'economics',
    name: 'Economics',
    icon: '📊',
    chapters: ['Microeconomics', 'Macroeconomics', 'Indian Economy', 'Banking & Finance', 'International Trade'],
    color: 'from-violet-500 to-purple-600',
    totalQuestions: 3000,
  },
  {
    id: 'science',
    name: 'Science & Technology',
    icon: '🔬',
    chapters: ['Physics', 'Chemistry', 'Biology', 'Space Technology', 'IT & Computers'],
    color: 'from-cyan-500 to-blue-600',
    totalQuestions: 3000,
  },
  {
    id: 'environment',
    name: 'Environment & Ecology',
    icon: '🌿',
    chapters: ['Biodiversity', 'Climate Change', 'Pollution', 'Conservation', 'Environmental Laws'],
    color: 'from-green-500 to-teal-600',
    totalQuestions: 3000,
  },
  {
    id: 'current',
    name: 'Current Affairs',
    icon: '📰',
    chapters: ['National', 'International', 'Sports', 'Awards & Honours', 'Summits & Conferences'],
    color: 'from-rose-500 to-pink-600',
    totalQuestions: 3000,
  },
];

// Generate questions dynamically
const questionTemplates: Record<string, Record<string, { questions: Omit<Question, 'id' | 'subject' | 'chapter' | 'difficulty'>[] }>> = {
  history: {
    'Ancient India': {
      questions: [
        { question: 'Which civilization is known as the Indus Valley Civilization?', options: ['Harappan Civilization', 'Vedic Civilization', 'Mauryan Civilization', 'Gupta Civilization'], correctAnswer: 0, explanation: 'The Indus Valley Civilization is also known as the Harappan Civilization, named after the first site discovered at Harappa in present-day Pakistan.' },
        { question: 'The Rigveda was composed during which period?', options: ['1500-1000 BCE', '3000-2500 BCE', '500-200 BCE', '1000-500 CE'], correctAnswer: 0, explanation: 'The Rigveda, the oldest of the four Vedas, was composed approximately between 1500-1000 BCE during the early Vedic period.' },
        { question: 'Who founded the Mauryan Empire?', options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Bimbisara'], correctAnswer: 1, explanation: 'Chandragupta Maurya founded the Mauryan Empire in 322 BCE with the help of his mentor Chanakya (Kautilya).' },
        { question: 'The Great Bath was found at which Harappan site?', options: ['Harappa', 'Mohenjo-daro', 'Lothal', 'Kalibangan'], correctAnswer: 1, explanation: 'The Great Bath, one of the most remarkable structures of the Indus Valley Civilization, was discovered at Mohenjo-daro.' },
        { question: 'Which Mauryan ruler embraced Buddhism after the Kalinga War?', options: ['Chandragupta', 'Bindusara', 'Ashoka', 'Dasaratha'], correctAnswer: 2, explanation: 'Emperor Ashoka embraced Buddhism after witnessing the devastating aftermath of the Kalinga War (261 BCE).' },
        { question: 'The Arthashastra was written by?', options: ['Kalidasa', 'Kautilya', 'Megasthenes', 'Fa-Hien'], correctAnswer: 1, explanation: 'The Arthashastra, an ancient Indian treatise on statecraft, was written by Kautilya (also known as Chanakya).' },
        { question: 'Which dynasty built the Ajanta Caves?', options: ['Maurya', 'Gupta', 'Vakataka', 'Satavahana'], correctAnswer: 2, explanation: 'The Ajanta Caves were primarily built under the patronage of the Vakataka dynasty, particularly during the reign of Harisena.' },
        { question: 'The Iron Pillar at Mehrauli dates back to which period?', options: ['Maurya', 'Gupta', 'Mughal', 'Sultanate'], correctAnswer: 1, explanation: 'The Iron Pillar at Mehrauli, Delhi, dates back to the Gupta period (circa 4th century CE) and is famous for its rust-resistant composition.' },
        { question: 'Nalanda University was established during the reign of?', options: ['Ashoka', 'Kumaragupta I', 'Harsha', 'Kanishka'], correctAnswer: 1, explanation: 'Nalanda University was established during the reign of Kumaragupta I of the Gupta dynasty in the 5th century CE.' },
        { question: 'Which script was used in Ashokan inscriptions?', options: ['Devanagari', 'Brahmi', 'Sanskrit', 'Tamil'], correctAnswer: 1, explanation: 'Ashokan inscriptions were primarily written in Brahmi script, which is considered the ancestor of most South Asian scripts.' },
      ]
    },
    'Medieval India': {
      questions: [
        { question: 'Who established the Delhi Sultanate?', options: ['Qutub-ud-din Aibak', 'Iltutmish', 'Balban', 'Alauddin Khilji'], correctAnswer: 0, explanation: 'Qutub-ud-din Aibak established the Delhi Sultanate in 1206 CE after the death of Muhammad of Ghor.' },
        { question: 'The Vijayanagara Empire was founded by?', options: ['Krishnadevaraya', 'Harihara and Bukka', 'Deva Raya', 'Tirumala'], correctAnswer: 1, explanation: 'The Vijayanagara Empire was founded by Harihara I and Bukka Raya I in 1336 CE.' },
        { question: 'Who built the Qutub Minar?', options: ['Qutub-ud-din Aibak', 'Iltutmish', 'Both A and B', 'Alauddin Khilji'], correctAnswer: 2, explanation: 'Qutub Minar was started by Qutub-ud-din Aibak and completed by Iltutmish.' },
        { question: 'The Bhakti movement was initiated by?', options: ['Ramanuja', 'Shankaracharya', 'Madhvacharya', 'Kabir'], correctAnswer: 0, explanation: 'The Bhakti movement in South India was initiated by Ramanuja in the 12th century, who advocated Vishishtadvaita philosophy.' },
        { question: 'Which Mughal emperor built the Taj Mahal?', options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'], correctAnswer: 2, explanation: 'Shah Jahan built the Taj Mahal (1632-1653) in memory of his wife Mumtaz Mahal.' },
        { question: 'Din-i-Ilahi was founded by?', options: ['Akbar', 'Shah Jahan', 'Jahangir', 'Humayun'], correctAnswer: 0, explanation: 'Din-i-Ilahi was a syncretic religion founded by Mughal Emperor Akbar in 1582 CE, attempting to merge the best elements of different religions.' },
        { question: 'The Battle of Panipat (1526) was fought between?', options: ['Babur and Ibrahim Lodi', 'Akbar and Hemu', 'Humayun and Sher Shah', 'Aurangzeb and Dara'], correctAnswer: 0, explanation: 'The First Battle of Panipat (1526) was fought between Babur and Ibrahim Lodi, leading to the establishment of the Mughal Empire.' },
        { question: 'Who was the court poet of Krishnadevaraya?', options: ['Tenali Rama', 'Allasani Peddana', 'Tikkana', 'Nannaya'], correctAnswer: 1, explanation: 'Allasani Peddana was the greatest Telugu poet in the court of Krishnadevaraya and is known as Andhra Kavita Pitamaha.' },
        { question: 'The Chola dynasty was famous for?', options: ['Temple architecture', 'Naval power', 'Bronze sculptures', 'All of the above'], correctAnswer: 3, explanation: 'The Chola dynasty was renowned for temple architecture (Brihadisvara), naval power (conquests in SE Asia), and bronze sculptures (Nataraja).' },
        { question: 'Shivaji was crowned as Chhatrapati in which year?', options: ['1674', '1680', '1660', '1670'], correctAnswer: 0, explanation: 'Shivaji was crowned as Chhatrapati (sovereign ruler) in 1674 at Raigad Fort.' },
      ]
    },
    'Modern India': {
      questions: [
        { question: 'The Revolt of 1857 started from?', options: ['Delhi', 'Meerut', 'Kanpur', 'Lucknow'], correctAnswer: 1, explanation: 'The Revolt of 1857 began on May 10, 1857, in Meerut when Indian sepoys refused to use the new Enfield rifle cartridges.' },
        { question: 'Who founded the Indian National Congress?', options: ['Mahatma Gandhi', 'A.O. Hume', 'Dadabhai Naoroji', 'W.C. Bonnerjee'], correctAnswer: 1, explanation: 'The Indian National Congress was founded by Allan Octavian Hume, a retired British civil servant, in 1885.' },
        { question: 'The Jallianwala Bagh massacre occurred in?', options: ['1919', '1920', '1921', '1918'], correctAnswer: 0, explanation: 'The Jallianwala Bagh massacre took place on April 13, 1919, in Amritsar, where General Dyer ordered troops to fire on peaceful protesters.' },
        { question: 'Who gave the slogan "Swaraj is my birthright"?', options: ['Gandhi', 'Tilak', 'Nehru', 'Patel'], correctAnswer: 1, explanation: 'Bal Gangadhar Tilak coined the famous slogan "Swaraj is my birthright and I shall have it."' },
        { question: 'The Quit India Movement was launched in?', options: ['1940', '1942', '1944', '1946'], correctAnswer: 1, explanation: 'The Quit India Movement was launched on August 8, 1942, by Mahatma Gandhi demanding an end to British rule in India.' },
        { question: 'Who was the last Viceroy of India?', options: ['Lord Mountbatten', 'Lord Wavell', 'Lord Irwin', 'Lord Curzon'], correctAnswer: 0, explanation: 'Lord Mountbatten was the last Viceroy of India (1947) who oversaw the partition and transfer of power.' },
        { question: 'The Dandi March was associated with?', options: ['Non-Cooperation Movement', 'Civil Disobedience Movement', 'Quit India Movement', 'Swadeshi Movement'], correctAnswer: 1, explanation: 'The Dandi March (Salt March) in 1930 was part of the Civil Disobedience Movement, where Gandhi marched to make salt, defying British salt laws.' },
        { question: 'Who founded the Arya Samaj?', options: ['Swami Vivekananda', 'Dayananda Saraswati', 'Raja Ram Mohan Roy', 'Ramakrishna'], correctAnswer: 1, explanation: 'Swami Dayananda Saraswati founded the Arya Samaj in 1875 in Bombay (now Mumbai).' },
        { question: 'The partition of Bengal was done in?', options: ['1905', '1906', '1907', '1904'], correctAnswer: 0, explanation: 'The Partition of Bengal was carried out by Lord Curzon on October 16, 1905, dividing Bengal on communal lines.' },
        { question: 'Subhas Chandra Bose founded which army?', options: ['Indian National Army', 'Azad Hind Fauj', 'Both A and B', 'None'], correctAnswer: 2, explanation: 'Subhas Chandra Bose reorganized the Indian National Army (also called Azad Hind Fauj) in 1943 to fight against the British.' },
      ]
    },
    'Art & Culture': {
      questions: [
        { question: 'Bharatanatyam originated in which state?', options: ['Kerala', 'Tamil Nadu', 'Andhra Pradesh', 'Karnataka'], correctAnswer: 1, explanation: 'Bharatanatyam is one of the oldest classical dance forms originating from Tamil Nadu, traditionally performed in Hindu temples.' },
        { question: 'The Konark Sun Temple is located in?', options: ['Rajasthan', 'Odisha', 'Madhya Pradesh', 'Gujarat'], correctAnswer: 1, explanation: 'The Konark Sun Temple is located in Odisha and was built by King Narasimhadeva I of the Eastern Ganga dynasty in the 13th century.' },
        { question: 'Kathakali is a classical dance form from?', options: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh'], correctAnswer: 2, explanation: 'Kathakali is a major form of classical Indian dance originating from Kerala, known for its elaborate costumes and makeup.' },
        { question: 'The Sangam literature belongs to which language?', options: ['Sanskrit', 'Tamil', 'Telugu', 'Kannada'], correctAnswer: 1, explanation: 'Sangam literature is a collection of ancient Tamil literary works dating from the 3rd century BCE to the 3rd century CE.' },
        { question: 'Khajuraho temples are famous for?', options: ['Buddhist sculptures', 'Erotic sculptures', 'Jain paintings', 'Islamic calligraphy'], correctAnswer: 1, explanation: 'The Khajuraho Group of Monuments in Madhya Pradesh is famous for its nagara-style architecture and erotic sculptures.' },
        { question: 'Which Raga is associated with morning?', options: ['Bhairav', 'Malhar', 'Deepak', 'Megh'], correctAnswer: 0, explanation: 'Raga Bhairav is traditionally performed in the early morning hours and is one of the oldest ragas in Indian classical music.' },
        { question: 'Pattachitra painting tradition belongs to?', options: ['Rajasthan', 'Odisha', 'Madhya Pradesh', 'Gujarat'], correctAnswer: 1, explanation: 'Pattachitra is a traditional cloth-based scroll painting from Odisha, depicting mythological narratives and folktales.' },
        { question: 'The Natya Shastra was written by?', options: ['Kalidasa', 'Bharata Muni', 'Panini', 'Vatsyayana'], correctAnswer: 1, explanation: 'The Natya Shastra was written by Bharata Muni and is considered the foundational treatise on performing arts in India.' },
        { question: 'Madhubani painting originated in?', options: ['Bihar', 'Rajasthan', 'Odisha', 'West Bengal'], correctAnswer: 0, explanation: 'Madhubani painting is practiced in the Mithila region of Bihar, known for eye-catching geometrical patterns and nature motifs.' },
        { question: 'Which is the oldest Veda?', options: ['Samaveda', 'Yajurveda', 'Atharvaveda', 'Rigveda'], correctAnswer: 3, explanation: 'The Rigveda is the oldest of the four Vedas, composed around 1500-1200 BCE, containing 1,028 hymns.' },
      ]
    },
    'Freedom Struggle': {
      questions: [
        { question: 'Who is known as the Father of the Nation?', options: ['Nehru', 'Patel', 'Gandhi', 'Ambedkar'], correctAnswer: 2, explanation: 'Mahatma Gandhi is known as the Father of the Nation for his pivotal role in India\'s independence movement.' },
        { question: 'The Non-Cooperation Movement was launched in?', options: ['1920', '1919', '1921', '1922'], correctAnswer: 0, explanation: 'The Non-Cooperation Movement was launched by Mahatma Gandhi on August 1, 1920, calling for boycott of British goods and institutions.' },
        { question: 'Who led the Bardoli Satyagraha?', options: ['Gandhi', 'Sardar Patel', 'Nehru', 'Rajagopalachari'], correctAnswer: 1, explanation: 'Sardar Vallabhbhai Patel led the successful Bardoli Satyagraha in 1928, earning the title "Sardar" (leader).' },
        { question: 'The Indian flag was first hoisted on January 26, 1930 at?', options: ['Delhi', 'Lahore', 'Calcutta', 'Bombay'], correctAnswer: 1, explanation: 'The Indian National Congress hoisted the tricolor flag on the banks of the Ravi River in Lahore on January 26, 1930.' },
        { question: 'Who founded the Forward Bloc?', options: ['Subhas Chandra Bose', 'Bhagat Singh', 'Chandrashekhar Azad', 'Rajguru'], correctAnswer: 0, explanation: 'Subhas Chandra Bose founded the All India Forward Bloc in 1939 after differences with the Congress leadership.' },
        { question: 'The Poona Pact was signed between?', options: ['Gandhi and Jinnah', 'Gandhi and Ambedkar', 'Nehru and Patel', 'Gandhi and Irwin'], correctAnswer: 1, explanation: 'The Poona Pact (1932) was an agreement between Mahatma Gandhi and Dr. B.R. Ambedkar on political representation for depressed classes.' },
        { question: 'Who gave the call "Do or Die"?', options: ['Tilak', 'Gandhi', 'Bose', 'Bhagat Singh'], correctAnswer: 1, explanation: 'Mahatma Gandhi gave the call "Do or Die" during the Quit India Movement in 1942.' },
        { question: 'The Cripps Mission came to India in?', options: ['1940', '1942', '1944', '1946'], correctAnswer: 1, explanation: 'The Cripps Mission arrived in India in March 1942 with proposals for Indian self-governance after World War II.' },
        { question: 'Who was the first woman president of INC?', options: ['Sarojini Naidu', 'Annie Besant', 'Indira Gandhi', 'Vijaya Lakshmi Pandit'], correctAnswer: 1, explanation: 'Annie Besant became the first woman president of the Indian National Congress in 1917 at the Calcutta session.' },
        { question: 'India gained independence on?', options: ['August 15, 1947', 'January 26, 1950', 'August 15, 1948', 'January 26, 1947'], correctAnswer: 0, explanation: 'India gained independence from British rule on August 15, 1947.' },
      ]
    }
  },
  geography: {
    'Physical Geography': {
      questions: [
        { question: 'The core of the Earth is primarily made of?', options: ['Iron and Nickel', 'Silicon and Oxygen', 'Magnesium and Iron', 'Aluminum and Silicon'], correctAnswer: 0, explanation: 'The Earth\'s core is primarily composed of iron and nickel, with the inner core being solid and the outer core being liquid.' },
        { question: 'Which type of rock is formed by volcanic activity?', options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Alluvial'], correctAnswer: 2, explanation: 'Igneous rocks are formed from the cooling and solidification of magma or lava from volcanic activity.' },
        { question: 'The Coriolis effect is caused by?', options: ['Earth\'s rotation', 'Gravity', 'Solar radiation', 'Tidal forces'], correctAnswer: 0, explanation: 'The Coriolis effect is caused by the Earth\'s rotation, deflecting moving objects to the right in the Northern Hemisphere.' },
        { question: 'The deepest ocean trench is?', options: ['Tonga Trench', 'Mariana Trench', 'Philippine Trench', 'Japan Trench'], correctAnswer: 1, explanation: 'The Mariana Trench in the Pacific Ocean is the deepest ocean trench, reaching about 11,034 meters at Challenger Deep.' },
        { question: 'What causes tides?', options: ['Wind', 'Gravitational pull of Moon and Sun', 'Earth\'s rotation only', 'Ocean currents'], correctAnswer: 1, explanation: 'Tides are primarily caused by the gravitational pull of the Moon and the Sun on the Earth\'s oceans.' },
        { question: 'The ozone layer is found in which layer of atmosphere?', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], correctAnswer: 1, explanation: 'The ozone layer is found in the stratosphere, approximately 15-35 km above the Earth\'s surface.' },
        { question: 'A delta is formed at?', options: ['Source of a river', 'Mouth of a river', 'Middle course', 'Tributary junction'], correctAnswer: 1, explanation: 'A delta is formed at the mouth of a river where it meets a sea or lake, depositing sediment carried from upstream.' },
        { question: 'Which is the largest desert in the world?', options: ['Sahara', 'Antarctic', 'Arabian', 'Gobi'], correctAnswer: 1, explanation: 'The Antarctic Desert is the largest desert in the world by area (14.2 million km²), followed by the Sahara.' },
        { question: 'Earthquakes are measured by?', options: ['Beaufort Scale', 'Richter Scale', 'Mohs Scale', 'Decibel Scale'], correctAnswer: 1, explanation: 'Earthquakes are measured by the Richter Scale (magnitude) and the Modified Mercalli Intensity Scale (intensity).' },
        { question: 'The Ring of Fire is associated with?', options: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'], correctAnswer: 1, explanation: 'The Ring of Fire is a major area of volcanic and seismic activity around the Pacific Ocean, home to about 75% of the world\'s active volcanoes.' },
      ]
    },
    'Indian Geography': {
      questions: [
        { question: 'The longest river in India is?', options: ['Ganga', 'Godavari', 'Brahmaputra', 'Yamuna'], correctAnswer: 0, explanation: 'The Ganga is the longest river in India, flowing approximately 2,525 km from the Gangotri Glacier to the Bay of Bengal.' },
        { question: 'Which state has the largest area in India?', options: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh'], correctAnswer: 2, explanation: 'Rajasthan is the largest state in India by area, covering 342,239 square kilometers.' },
        { question: 'The Western Ghats are also known as?', options: ['Sahyadri', 'Vindhya', 'Satpura', 'Aravalli'], correctAnswer: 0, explanation: 'The Western Ghats are also known as Sahyadri, stretching about 1,600 km along India\'s western coast.' },
        { question: 'Which soil is best for cotton cultivation?', options: ['Alluvial', 'Black (Regur)', 'Red', 'Laterite'], correctAnswer: 1, explanation: 'Black soil (Regur) is best for cotton cultivation due to its high moisture retention capacity.' },
        { question: 'The Chilka Lake is in which state?', options: ['Andhra Pradesh', 'Tamil Nadu', 'Odisha', 'Kerala'], correctAnswer: 2, explanation: 'Chilka Lake is in Odisha and is the largest coastal lagoon in India and the second largest in the world.' },
        { question: 'Which pass connects Leh to Srinagar?', options: ['Rohtang Pass', 'Zoji La', 'Khyber Pass', 'Banihal Pass'], correctAnswer: 1, explanation: 'Zoji La pass connects Leh (Ladakh) to Srinagar (Kashmir Valley) and sits at an elevation of about 3,528 meters.' },
        { question: 'The Thar Desert is located in?', options: ['Gujarat', 'Rajasthan', 'Both A and B', 'Madhya Pradesh'], correctAnswer: 2, explanation: 'The Thar Desert (Great Indian Desert) is located in both Rajasthan and Gujarat, covering about 200,000 sq km.' },
        { question: 'Which river is called the "Sorrow of Bihar"?', options: ['Ganga', 'Kosi', 'Son', 'Gandak'], correctAnswer: 1, explanation: 'The Kosi River is called the "Sorrow of Bihar" due to its frequent floods and course changes causing destruction.' },
        { question: 'Nanda Devi peak is in which state?', options: ['Himachal Pradesh', 'Uttarakhand', 'Sikkim', 'J&K'], correctAnswer: 1, explanation: 'Nanda Devi (7,816 m) is located in Uttarakhand and is the second highest mountain in India.' },
        { question: 'The monsoon first hits which coast of India?', options: ['Coromandel Coast', 'Malabar Coast', 'Konkan Coast', 'Gujarat Coast'], correctAnswer: 1, explanation: 'The Southwest monsoon first hits the Malabar Coast (Kerala) around June 1, bringing the first rains of the season.' },
      ]
    },
    'World Geography': {
      questions: [
        { question: 'The largest continent by area is?', options: ['Africa', 'Asia', 'North America', 'Europe'], correctAnswer: 1, explanation: 'Asia is the largest continent, covering about 44.58 million square kilometers, roughly 30% of the Earth\'s land area.' },
        { question: 'The Amazon River flows through?', options: ['Africa', 'South America', 'North America', 'Asia'], correctAnswer: 1, explanation: 'The Amazon River flows through South America, primarily through Brazil, and is the largest river by volume.' },
        { question: 'The Great Barrier Reef is in?', options: ['USA', 'Brazil', 'Australia', 'Indonesia'], correctAnswer: 2, explanation: 'The Great Barrier Reef is off the coast of Queensland, Australia, and is the world\'s largest coral reef system.' },
        { question: 'Mount Everest is located in?', options: ['India', 'Nepal-China border', 'Pakistan', 'Bhutan'], correctAnswer: 1, explanation: 'Mount Everest (8,848.86 m) is located on the border of Nepal and China (Tibet), in the Mahalangur Himal sub-range.' },
        { question: 'The Suez Canal connects?', options: ['Atlantic and Pacific', 'Mediterranean and Red Sea', 'Black Sea and Mediterranean', 'Pacific and Indian'], correctAnswer: 1, explanation: 'The Suez Canal connects the Mediterranean Sea to the Red Sea, providing a direct route between Europe and Asia.' },
        { question: 'Which country is the largest by area?', options: ['Canada', 'USA', 'China', 'Russia'], correctAnswer: 3, explanation: 'Russia is the largest country in the world by area, covering 17.1 million square kilometers.' },
        { question: 'The Sahara Desert is in which continent?', options: ['Asia', 'Africa', 'Australia', 'South America'], correctAnswer: 1, explanation: 'The Sahara Desert is located in North Africa, spanning about 9.2 million square kilometers.' },
        { question: 'Which ocean is the smallest?', options: ['Indian', 'Atlantic', 'Arctic', 'Pacific'], correctAnswer: 2, explanation: 'The Arctic Ocean is the smallest ocean, covering about 14.06 million square kilometers.' },
        { question: 'The Nile River flows into?', options: ['Atlantic Ocean', 'Indian Ocean', 'Mediterranean Sea', 'Red Sea'], correctAnswer: 2, explanation: 'The Nile River flows northward through northeast Africa and empties into the Mediterranean Sea.' },
        { question: 'Which is the longest mountain range?', options: ['Himalayas', 'Andes', 'Rockies', 'Alps'], correctAnswer: 1, explanation: 'The Andes is the longest continental mountain range, extending about 7,000 km along South America\'s western coast.' },
      ]
    },
    'Climatology': {
      questions: [
        { question: 'El Niño is associated with?', options: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'], correctAnswer: 1, explanation: 'El Niño is a climate pattern associated with warming of the Pacific Ocean surface temperatures near the equator.' },
        { question: 'The Greenhouse Effect is caused mainly by?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correctAnswer: 2, explanation: 'The Greenhouse Effect is primarily caused by greenhouse gases like CO2, methane, and water vapor trapping heat in the atmosphere.' },
        { question: 'Which wind system affects Indian monsoon?', options: ['Trade winds', 'Westerlies', 'Both', 'Polar winds'], correctAnswer: 2, explanation: 'Both trade winds and westerlies influence the Indian monsoon system through complex atmospheric circulation patterns.' },
        { question: 'The hottest place on Earth is?', options: ['Sahara Desert', 'Death Valley', 'Dasht-e-Lut', 'Thar Desert'], correctAnswer: 2, explanation: 'Dasht-e-Lut in Iran recorded the highest surface temperature of 70.7°C (159.3°F) in 2005.' },
        { question: 'Cyclones in the Indian Ocean rotate?', options: ['Clockwise', 'Counter-clockwise', 'No rotation', 'Random'], correctAnswer: 1, explanation: 'Cyclones in the Northern Indian Ocean rotate counter-clockwise due to the Coriolis effect.' },
        { question: 'Which gas depletes the ozone layer?', options: ['CO2', 'CFCs', 'Methane', 'Nitrogen'], correctAnswer: 1, explanation: 'Chlorofluorocarbons (CFCs) are the primary chemicals responsible for ozone layer depletion.' },
        { question: 'La Niña results in?', options: ['Warmer Pacific waters', 'Cooler Pacific waters', 'No change', 'Warmer Atlantic'], correctAnswer: 1, explanation: 'La Niña results in cooler than normal sea surface temperatures in the central and eastern Pacific Ocean.' },
        { question: 'What is an isotherm?', options: ['Line of equal pressure', 'Line of equal temperature', 'Line of equal rainfall', 'Line of equal humidity'], correctAnswer: 1, explanation: 'An isotherm is a line on a map connecting points of equal temperature at a given time.' },
        { question: 'The Intertropical Convergence Zone (ITCZ) is?', options: ['A cold front', 'Where trade winds meet', 'A desert belt', 'A polar region'], correctAnswer: 1, explanation: 'The ITCZ is the area where the northeast and southeast trade winds converge near the equator, causing rising air and heavy rainfall.' },
        { question: 'Global warming primarily leads to?', options: ['Sea level rise', 'Ice melting', 'Climate change', 'All of the above'], correctAnswer: 3, explanation: 'Global warming leads to sea level rise, ice melting, and overall climate change affecting weather patterns worldwide.' },
      ]
    },
    'Oceanography': {
      questions: [
        { question: 'The largest ocean is?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], correctAnswer: 2, explanation: 'The Pacific Ocean is the largest ocean, covering about 165.25 million square kilometers.' },
        { question: 'Tsunami waves are caused by?', options: ['Wind', 'Underwater earthquakes', 'Tides', 'Currents'], correctAnswer: 1, explanation: 'Tsunamis are primarily caused by underwater earthquakes, volcanic eruptions, or submarine landslides displacing large volumes of water.' },
        { question: 'The Gulf Stream is a?', options: ['Cold current', 'Warm current', 'Deep current', 'Tidal current'], correctAnswer: 1, explanation: 'The Gulf Stream is a warm ocean current originating in the Gulf of Mexico, flowing along the US east coast and across the Atlantic.' },
        { question: 'Which ocean has the most coral reefs?', options: ['Atlantic', 'Pacific', 'Indian', 'Arctic'], correctAnswer: 1, explanation: 'The Pacific Ocean has the most coral reefs, including the Coral Triangle, the global center of marine biodiversity.' },
        { question: 'Salinity of ocean water is measured in?', options: ['Percentage', 'Parts per thousand', 'pH', 'Moles'], correctAnswer: 1, explanation: 'Ocean salinity is measured in parts per thousand (ppt or ‰), with average ocean salinity being about 35 ppt.' },
        { question: 'The Sargasso Sea is in which ocean?', options: ['Pacific', 'Indian', 'Atlantic', 'Arctic'], correctAnswer: 2, explanation: 'The Sargasso Sea is a region in the North Atlantic Ocean, bounded by ocean currents and known for its Sargassum seaweed.' },
        { question: 'Continental shelf extends to what depth?', options: ['100m', '200m', '500m', '1000m'], correctAnswer: 1, explanation: 'The continental shelf typically extends to a depth of about 200 meters (660 feet) before the continental slope begins.' },
        { question: 'What percentage of Earth is covered by oceans?', options: ['51%', '61%', '71%', '81%'], correctAnswer: 2, explanation: 'Approximately 71% of the Earth\'s surface is covered by oceans and seas.' },
        { question: 'The deepest point in the Indian Ocean is?', options: ['Java Trench', 'Sunda Trench', 'Diamantina Trench', 'Mauritius Trench'], correctAnswer: 0, explanation: 'The Java Trench (also called Sunda Trench) is the deepest point in the Indian Ocean at about 7,450 meters.' },
        { question: 'Thermohaline circulation is driven by?', options: ['Wind', 'Temperature and salinity', 'Tides', 'Coriolis effect'], correctAnswer: 1, explanation: 'Thermohaline circulation is driven by differences in temperature (thermo) and salinity (haline) of ocean water.' },
      ]
    }
  },
  polity: {
    'Constitution': {
      questions: [
        { question: 'The Indian Constitution was adopted on?', options: ['January 26, 1950', 'November 26, 1949', 'August 15, 1947', 'January 26, 1949'], correctAnswer: 1, explanation: 'The Indian Constitution was adopted on November 26, 1949, and came into effect on January 26, 1950.' },
        { question: 'Who is known as the Father of the Indian Constitution?', options: ['Nehru', 'Gandhi', 'Ambedkar', 'Patel'], correctAnswer: 2, explanation: 'Dr. B.R. Ambedkar is known as the Father of the Indian Constitution as Chairman of the Drafting Committee.' },
        { question: 'How many Fundamental Rights are there?', options: ['5', '6', '7', '8'], correctAnswer: 1, explanation: 'There are 6 Fundamental Rights in the Indian Constitution (originally 7, Right to Property was removed by the 44th Amendment).' },
        { question: 'Article 21 deals with?', options: ['Right to Equality', 'Right to Life', 'Right to Freedom', 'Right to Education'], correctAnswer: 1, explanation: 'Article 21 guarantees the Right to Life and Personal Liberty - "No person shall be deprived of his life or personal liberty except according to procedure established by law."' },
        { question: 'The Preamble of India begins with?', options: ['"We the Citizens"', '"We the People"', '"The Government"', '"The Republic"'], correctAnswer: 1, explanation: 'The Preamble of the Indian Constitution begins with "We, the People of India..."' },
        { question: 'Directive Principles are in which Part?', options: ['Part III', 'Part IV', 'Part V', 'Part VI'], correctAnswer: 1, explanation: 'Directive Principles of State Policy are contained in Part IV (Articles 36-51) of the Indian Constitution.' },
        { question: 'How many schedules are in the Constitution?', options: ['8', '10', '12', '14'], correctAnswer: 2, explanation: 'There are 12 schedules in the Indian Constitution, each dealing with specific aspects of governance.' },
        { question: 'The concept of Fundamental Duties was added by?', options: ['42nd Amendment', '44th Amendment', '46th Amendment', '52nd Amendment'], correctAnswer: 0, explanation: 'Fundamental Duties were added by the 42nd Amendment Act, 1976, based on the Swaran Singh Committee recommendations.' },
        { question: 'Which article abolishes untouchability?', options: ['Article 14', 'Article 15', 'Article 17', 'Article 19'], correctAnswer: 2, explanation: 'Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form.' },
        { question: 'The Constitution originally had how many articles?', options: ['395', '400', '350', '450'], correctAnswer: 0, explanation: 'The original Constitution had 395 articles in 22 parts and 8 schedules.' },
      ]
    },
    'Parliament': {
      questions: [
        { question: 'The Indian Parliament consists of?', options: ['Lok Sabha only', 'Rajya Sabha only', 'President + Lok Sabha + Rajya Sabha', 'Lok Sabha + Rajya Sabha'], correctAnswer: 2, explanation: 'The Indian Parliament consists of the President and two Houses - the Rajya Sabha (Council of States) and the Lok Sabha (House of the People).' },
        { question: 'Maximum strength of Lok Sabha is?', options: ['545', '550', '552', '555'], correctAnswer: 2, explanation: 'The maximum strength of Lok Sabha is 552 (530 from states + 20 from UTs + 2 nominated Anglo-Indians, though the nomination provision expired in 2020).' },
        { question: 'Rajya Sabha members serve for how many years?', options: ['4 years', '5 years', '6 years', 'Life'], correctAnswer: 2, explanation: 'Rajya Sabha members serve for 6 years, with one-third of members retiring every 2 years.' },
        { question: 'Who presides over Rajya Sabha?', options: ['President', 'Vice President', 'Speaker', 'PM'], correctAnswer: 1, explanation: 'The Vice President of India is the ex-officio Chairman of the Rajya Sabha.' },
        { question: 'Money Bill can be introduced in?', options: ['Lok Sabha only', 'Rajya Sabha only', 'Either House', 'Joint Session'], correctAnswer: 0, explanation: 'A Money Bill can only be introduced in the Lok Sabha and only with the prior recommendation of the President.' },
        { question: 'The Speaker of Lok Sabha is elected by?', options: ['President', 'Members of Lok Sabha', 'Both Houses', 'PM'], correctAnswer: 1, explanation: 'The Speaker of Lok Sabha is elected by the members of Lok Sabha from among its members.' },
        { question: 'What is the quorum for Parliament?', options: ['1/3 of total', '1/4 of total', '1/10 of total', '1/2 of total'], correctAnswer: 2, explanation: 'The quorum for a sitting of either House of Parliament is one-tenth of the total number of members.' },
        { question: 'A No-Confidence Motion can be moved in?', options: ['Rajya Sabha', 'Lok Sabha', 'Both Houses', 'Neither'], correctAnswer: 1, explanation: 'A No-Confidence Motion can only be moved in the Lok Sabha, as the Council of Ministers is collectively responsible to it.' },
        { question: 'How many times can Rajya Sabha delay a Money Bill?', options: ['30 days', '14 days', 'Cannot delay', '90 days'], correctAnswer: 1, explanation: 'Rajya Sabha can delay a Money Bill for a maximum of 14 days. If not returned within 14 days, it is deemed passed by both Houses.' },
        { question: 'Joint sitting of Parliament is called by?', options: ['Speaker', 'PM', 'President', 'Vice President'], correctAnswer: 2, explanation: 'A joint sitting of both Houses of Parliament is called by the President under Article 108 to resolve deadlocks on ordinary bills.' },
      ]
    },
    'Judiciary': {
      questions: [
        { question: 'The Chief Justice of India is appointed by?', options: ['PM', 'President', 'Parliament', 'Law Minister'], correctAnswer: 1, explanation: 'The Chief Justice of India is appointed by the President, typically following the convention of appointing the senior-most judge of the Supreme Court.' },
        { question: 'How many judges are in the Supreme Court?', options: ['26', '31', '34', '28'], correctAnswer: 2, explanation: 'The Supreme Court of India currently has 34 judges including the Chief Justice (increased from 31 in 2019).' },
        { question: 'Which article deals with High Courts?', options: ['Article 124', 'Article 214', 'Article 226', 'Article 231'], correctAnswer: 1, explanation: 'Article 214 of the Constitution provides for a High Court for each state (or group of states).' },
        { question: 'Judicial Review is implied in which article?', options: ['Article 13', 'Article 32', 'Article 226', 'All of these'], correctAnswer: 3, explanation: 'Judicial Review is implied in Articles 13, 32, and 226, allowing courts to examine the constitutionality of laws.' },
        { question: 'The writ of Habeas Corpus means?', options: ['To have the body', 'To command', 'To forbid', 'To certify'], correctAnswer: 0, explanation: 'Habeas Corpus literally means "to have the body" - it is a writ requiring a person under arrest to be brought before a court.' },
        { question: 'Public Interest Litigation was introduced by?', options: ['Justice P.N. Bhagwati', 'Justice V.R. Krishna Iyer', 'Both A and B', 'Justice Subba Rao'], correctAnswer: 2, explanation: 'PIL was introduced by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer in the late 1970s-early 1980s.' },
        { question: 'Supreme Court\'s original jurisdiction covers?', options: ['Criminal cases', 'Federal disputes', 'Appeals', 'All cases'], correctAnswer: 1, explanation: 'The Supreme Court has original jurisdiction in disputes between the Centre and states, or between states (Article 131).' },
        { question: 'Retirement age of Supreme Court judge is?', options: ['60', '62', '65', '70'], correctAnswer: 2, explanation: 'Supreme Court judges retire at the age of 65 years, while High Court judges retire at 62 years.' },
        { question: 'Which writ means "what is your authority"?', options: ['Mandamus', 'Quo Warranto', 'Certiorari', 'Prohibition'], correctAnswer: 1, explanation: 'Quo Warranto means "by what authority" - it is issued to inquire into the legality of a claim to a public office.' },
        { question: 'Article 32 is called?', options: ['Heart of Constitution', 'Soul of Constitution', 'Both', 'Neither'], correctAnswer: 1, explanation: 'Dr. Ambedkar called Article 32 (Right to Constitutional Remedies) the "heart and soul of the Constitution."' },
      ]
    },
    'State Government': {
      questions: [
        { question: 'The Governor of a state is appointed by?', options: ['CM', 'President', 'PM', 'Parliament'], correctAnswer: 1, explanation: 'The Governor of a state is appointed by the President of India and serves at the pleasure of the President.' },
        { question: 'The Chief Minister is appointed by?', options: ['President', 'Governor', 'PM', 'Speaker'], correctAnswer: 1, explanation: 'The Chief Minister is appointed by the Governor, who typically invites the leader of the majority party in the State Legislative Assembly.' },
        { question: 'How many states have bicameral legislature?', options: ['4', '5', '6', '7'], correctAnswer: 2, explanation: 'Currently 6 states have bicameral legislatures: Andhra Pradesh, Bihar, Karnataka, Maharashtra, Telangana, and Uttar Pradesh.' },
        { question: 'The Advocate General is appointed under?', options: ['Article 165', 'Article 164', 'Article 166', 'Article 167'], correctAnswer: 0, explanation: 'The Advocate General of a state is appointed under Article 165 by the Governor.' },
        { question: 'State List contains how many subjects?', options: ['61', '66', '47', '52'], correctAnswer: 1, explanation: 'The State List (List II) originally contained 66 subjects on which only state legislatures can make laws.' },
        { question: 'President\'s Rule in a state is under?', options: ['Article 352', 'Article 356', 'Article 360', 'Article 365'], correctAnswer: 1, explanation: 'President\'s Rule (State Emergency) is imposed under Article 356 when the constitutional machinery in a state fails.' },
        { question: 'Maximum duration of President\'s Rule?', options: ['6 months', '1 year', '2 years', '3 years'], correctAnswer: 3, explanation: 'President\'s Rule can be imposed for a maximum of 3 years, with parliamentary approval required every 6 months.' },
        { question: 'The Zonal Council was created under?', options: ['Constitution', 'States Reorganisation Act', 'Parliament Act', 'Executive Order'], correctAnswer: 1, explanation: 'Zonal Councils were established under the States Reorganisation Act, 1956, to promote interstate cooperation.' },
        { question: 'Who administers Union Territories?', options: ['Governor', 'President through Administrator', 'CM', 'Parliament'], correctAnswer: 1, explanation: 'Union Territories are administered by the President through an appointed Administrator (or Lieutenant Governor).' },
        { question: 'Article 371 deals with?', options: ['Emergency', 'Special provisions for states', 'Amendment', 'Fundamental Rights'], correctAnswer: 1, explanation: 'Article 371 and its sub-articles provide special provisions for specific states like Maharashtra, Gujarat, Nagaland, etc.' },
      ]
    },
    'Local Government': {
      questions: [
        { question: 'The 73rd Amendment deals with?', options: ['Municipalities', 'Panchayats', 'Judiciary', 'Parliament'], correctAnswer: 1, explanation: 'The 73rd Constitutional Amendment (1992) deals with Panchayati Raj institutions, giving them constitutional status.' },
        { question: 'Panchayati Raj has how many tiers?', options: ['2', '3', '4', '5'], correctAnswer: 1, explanation: 'The Panchayati Raj system has 3 tiers: Gram Panchayat (village), Panchayat Samiti (block), and Zila Parishad (district).' },
        { question: 'The 74th Amendment deals with?', options: ['Panchayats', 'Municipalities', 'State Government', 'Centre'], correctAnswer: 1, explanation: 'The 74th Constitutional Amendment (1992) deals with urban local bodies (Municipalities), giving them constitutional status.' },
        { question: 'Who heads the Gram Panchayat?', options: ['Collector', 'Sarpanch', 'BDO', 'MLA'], correctAnswer: 1, explanation: 'The Sarpanch (or Mukhiya/Pradhan in some states) heads the Gram Panchayat, elected by the villagers.' },
        { question: 'Reservation for women in Panchayats is?', options: ['25%', '33%', '50%', '40%'], correctAnswer: 1, explanation: 'The 73rd Amendment provides for not less than one-third (33%) reservation for women in Panchayats. Many states have increased this to 50%.' },
        { question: 'State Election Commission conducts?', options: ['State elections', 'Panchayat & Municipality elections', 'Lok Sabha elections', 'All elections'], correctAnswer: 1, explanation: 'The State Election Commission conducts elections to Panchayats and Municipalities as per Articles 243K and 243ZA.' },
        { question: 'Panchayat term is for?', options: ['4 years', '5 years', '6 years', '3 years'], correctAnswer: 1, explanation: 'The term of every Panchayat is 5 years from the date of its first meeting, as per the 73rd Amendment.' },
        { question: 'Which schedule lists Panchayat subjects?', options: ['10th', '11th', '12th', '9th'], correctAnswer: 1, explanation: 'The 11th Schedule lists 29 subjects for Panchayats, while the 12th Schedule lists 18 subjects for Municipalities.' },
        { question: 'Municipal Corporation is headed by?', options: ['Commissioner', 'Mayor', 'Chairman', 'Collector'], correctAnswer: 1, explanation: 'A Municipal Corporation is headed by a Mayor, who is the ceremonial head, while the Municipal Commissioner handles administration.' },
        { question: 'Which committee recommended Panchayati Raj?', options: ['Ashok Mehta', 'Balwant Rai Mehta', 'L.M. Singhvi', 'G.V.K. Rao'], correctAnswer: 1, explanation: 'The Balwant Rai Mehta Committee (1957) recommended the establishment of Panchayati Raj institutions in India.' },
      ]
    }
  },
  economics: {
    'Microeconomics': {
      questions: [
        { question: 'The law of demand states that?', options: ['Price up, demand up', 'Price up, demand down', 'Price constant, demand up', 'No relation'], correctAnswer: 1, explanation: 'The law of demand states that, other things being equal, when price increases, quantity demanded decreases, and vice versa.' },
        { question: 'A Giffen good has?', options: ['Normal demand curve', 'Upward sloping demand', 'Perfectly elastic', 'Vertical demand'], correctAnswer: 1, explanation: 'A Giffen good has an upward sloping demand curve - as price increases, demand also increases (violating the law of demand).' },
        { question: 'Elasticity of demand measures?', options: ['Total demand', 'Responsiveness to price', 'Supply changes', 'Income levels'], correctAnswer: 1, explanation: 'Price elasticity of demand measures the responsiveness of quantity demanded to a change in price.' },
        { question: 'In perfect competition, firms are?', options: ['Price makers', 'Price takers', 'Monopolists', 'Oligopolists'], correctAnswer: 1, explanation: 'In perfect competition, firms are price takers because no single firm can influence the market price.' },
        { question: 'Opportunity cost refers to?', options: ['Total cost', 'Fixed cost', 'Value of next best alternative', 'Variable cost'], correctAnswer: 2, explanation: 'Opportunity cost is the value of the next best alternative forgone when making a choice.' },
        { question: 'Consumer surplus is?', options: ['Extra supply', 'Willingness to pay minus price paid', 'Profit margin', 'Tax revenue'], correctAnswer: 1, explanation: 'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay.' },
        { question: 'Marginal utility tends to?', options: ['Increase', 'Decrease', 'Stay constant', 'Double'], correctAnswer: 1, explanation: 'According to the law of diminishing marginal utility, the additional satisfaction from each extra unit consumed tends to decrease.' },
        { question: 'A monopoly has how many sellers?', options: ['Many', 'Few', 'One', 'Two'], correctAnswer: 2, explanation: 'A monopoly market structure has only one seller who controls the entire market supply of a product.' },
        { question: 'Cross elasticity measures?', options: ['Price vs income', 'Demand of one good vs price of another', 'Supply vs demand', 'Time vs price'], correctAnswer: 1, explanation: 'Cross elasticity of demand measures the responsiveness of demand for one good to a change in the price of another good.' },
        { question: 'Nash Equilibrium is a concept in?', options: ['Microeconomics', 'Game Theory', 'Macroeconomics', 'Trade Theory'], correctAnswer: 1, explanation: 'Nash Equilibrium is a concept in Game Theory where no player can benefit by changing strategy while other players keep theirs unchanged.' },
      ]
    },
    'Macroeconomics': {
      questions: [
        { question: 'GDP stands for?', options: ['Gross Domestic Product', 'General Domestic Production', 'Gross Development Plan', 'General Development Product'], correctAnswer: 0, explanation: 'GDP stands for Gross Domestic Product - the total value of goods and services produced within a country in a given period.' },
        { question: 'Fiscal policy is managed by?', options: ['RBI', 'Government', 'Banks', 'SEBI'], correctAnswer: 1, explanation: 'Fiscal policy (taxation and government spending) is managed by the government, while monetary policy is managed by the RBI.' },
        { question: 'Inflation means?', options: ['Falling prices', 'Rising prices', 'Stable prices', 'No prices'], correctAnswer: 1, explanation: 'Inflation refers to a sustained increase in the general price level of goods and services in an economy over time.' },
        { question: 'CPI measures?', options: ['Industrial output', 'Consumer prices', 'Wholesale prices', 'Stock prices'], correctAnswer: 1, explanation: 'CPI (Consumer Price Index) measures the average change in prices paid by consumers for a basket of goods and services.' },
        { question: 'The Phillips Curve shows?', options: ['GDP vs Trade', 'Inflation vs Unemployment', 'Supply vs Demand', 'Saving vs Investment'], correctAnswer: 1, explanation: 'The Phillips Curve shows an inverse relationship between the rate of inflation and the rate of unemployment.' },
        { question: 'Repo rate is set by?', options: ['Government', 'RBI', 'SEBI', 'Parliament'], correctAnswer: 1, explanation: 'The Repo Rate (the rate at which RBI lends to commercial banks) is set by the Reserve Bank of India.' },
        { question: 'What is stagflation?', options: ['High growth + low inflation', 'Low growth + high inflation', 'High growth + high inflation', 'Low growth + low inflation'], correctAnswer: 1, explanation: 'Stagflation is an economic condition of stagnant growth combined with high inflation and high unemployment.' },
        { question: 'The multiplier effect relates to?', options: ['Tax', 'Government spending impact', 'Export', 'Import'], correctAnswer: 1, explanation: 'The multiplier effect describes how an initial increase in spending leads to a larger increase in national income.' },
        { question: 'Balance of Payments includes?', options: ['Current account only', 'Capital account only', 'Both current and capital accounts', 'Trade balance only'], correctAnswer: 2, explanation: 'The Balance of Payments includes both the Current Account (trade, services, transfers) and the Capital Account (investments, loans).' },
        { question: 'Deflation is?', options: ['Rising prices', 'Falling prices', 'Stable prices', 'Hyperinflation'], correctAnswer: 1, explanation: 'Deflation is a decrease in the general price level, which can lead to reduced economic activity and higher real debt burden.' },
      ]
    },
    'Indian Economy': {
      questions: [
        { question: 'India follows which type of economy?', options: ['Capitalist', 'Socialist', 'Mixed', 'Communist'], correctAnswer: 2, explanation: 'India follows a mixed economy model, combining elements of both capitalism and socialism.' },
        { question: 'The first Five Year Plan started in?', options: ['1947', '1950', '1951', '1955'], correctAnswer: 2, explanation: 'India\'s First Five Year Plan was launched in 1951, focusing on agriculture, irrigation, and power.' },
        { question: 'GST was introduced in India in?', options: ['2016', '2017', '2018', '2019'], correctAnswer: 1, explanation: 'The Goods and Services Tax (GST) was introduced in India on July 1, 2017, replacing multiple indirect taxes.' },
        { question: 'NITI Aayog replaced?', options: ['RBI', 'Planning Commission', 'Finance Commission', 'SEBI'], correctAnswer: 1, explanation: 'NITI Aayog (National Institution for Transforming India) replaced the Planning Commission on January 1, 2015.' },
        { question: 'The Green Revolution was related to?', options: ['Industry', 'Agriculture', 'Services', 'IT'], correctAnswer: 1, explanation: 'The Green Revolution (1960s-70s) was related to agriculture, introducing high-yielding variety seeds and modern farming techniques.' },
        { question: 'LPG reforms were introduced in?', options: ['1989', '1991', '1993', '1995'], correctAnswer: 1, explanation: 'The Liberalization, Privatization, and Globalization (LPG) reforms were introduced in 1991 under PM Narasimha Rao and FM Manmohan Singh.' },
        { question: 'Which sector contributes most to India\'s GDP?', options: ['Agriculture', 'Industry', 'Services', 'Mining'], correctAnswer: 2, explanation: 'The services sector contributes the most to India\'s GDP (approximately 54%), followed by industry and agriculture.' },
        { question: 'Make in India was launched in?', options: ['2013', '2014', '2015', '2016'], correctAnswer: 1, explanation: 'The Make in India initiative was launched on September 25, 2014, to encourage manufacturing in India.' },
        { question: 'Demonetization happened on?', options: ['November 8, 2016', 'November 8, 2017', 'January 1, 2017', 'December 31, 2016'], correctAnswer: 0, explanation: 'Demonetization of ₹500 and ₹1000 notes was announced on November 8, 2016, by PM Narendra Modi.' },
        { question: 'MUDRA Bank was established for?', options: ['Large industries', 'Micro enterprises', 'Foreign trade', 'Agriculture'], correctAnswer: 1, explanation: 'MUDRA (Micro Units Development and Refinance Agency) Bank was established to provide funding to micro and small enterprises.' },
      ]
    },
    'Banking & Finance': {
      questions: [
        { question: 'RBI was established in?', options: ['1934', '1935', '1947', '1950'], correctAnswer: 1, explanation: 'The Reserve Bank of India was established on April 1, 1935, under the RBI Act of 1934.' },
        { question: 'SLR stands for?', options: ['Standard Lending Rate', 'Statutory Liquidity Ratio', 'Systematic Lending Ratio', 'Standard Liquidity Rate'], correctAnswer: 1, explanation: 'SLR (Statutory Liquidity Ratio) is the minimum percentage of deposits that banks must maintain in liquid assets.' },
        { question: 'SEBI regulates?', options: ['Banks', 'Insurance', 'Stock Markets', 'Foreign Trade'], correctAnswer: 2, explanation: 'SEBI (Securities and Exchange Board of India) regulates the Indian stock/securities markets and protects investor interests.' },
        { question: 'The largest public sector bank in India is?', options: ['PNB', 'SBI', 'BOB', 'Canara Bank'], correctAnswer: 1, explanation: 'State Bank of India (SBI) is the largest public sector bank in India by assets, deposits, and number of branches.' },
        { question: 'CRR is maintained with?', options: ['Government', 'RBI', 'SEBI', 'Banks themselves'], correctAnswer: 1, explanation: 'CRR (Cash Reserve Ratio) is the portion of deposits that banks must maintain with the Reserve Bank of India in cash.' },
        { question: 'NABARD is related to?', options: ['Industry', 'Agriculture & Rural Development', 'Urban Development', 'Foreign Trade'], correctAnswer: 1, explanation: 'NABARD (National Bank for Agriculture and Rural Development) provides credit and development support for agriculture and rural areas.' },
        { question: 'What is the full form of NBFC?', options: ['National Banking & Finance Corporation', 'Non-Banking Financial Company', 'New Banking Finance Centre', 'National Board of Finance Control'], correctAnswer: 1, explanation: 'NBFC stands for Non-Banking Financial Company - entities that provide banking services without holding a banking license.' },
        { question: 'Priority sector lending includes?', options: ['Agriculture', 'MSMEs', 'Education', 'All of the above'], correctAnswer: 3, explanation: 'Priority sector lending includes agriculture, MSMEs, education, housing, social infrastructure, and other specified categories.' },
        { question: 'Jan Dhan Yojana was launched for?', options: ['Financial inclusion', 'Health insurance', 'Education loans', 'Housing loans'], correctAnswer: 0, explanation: 'Pradhan Mantri Jan Dhan Yojana (2014) was launched for financial inclusion, providing bank accounts to unbanked individuals.' },
        { question: 'What is the Indian currency code?', options: ['IND', 'INR', 'IRE', 'IRP'], correctAnswer: 1, explanation: 'INR (Indian Rupee) is the ISO 4217 currency code for the Indian currency.' },
      ]
    },
    'International Trade': {
      questions: [
        { question: 'WTO headquarters is in?', options: ['New York', 'Geneva', 'Brussels', 'London'], correctAnswer: 1, explanation: 'The World Trade Organization (WTO) headquarters is in Geneva, Switzerland.' },
        { question: 'India\'s largest trading partner is?', options: ['USA', 'China', 'UAE', 'Japan'], correctAnswer: 0, explanation: 'The United States is India\'s largest overall trading partner, followed by China and UAE.' },
        { question: 'SEZ stands for?', options: ['Special Economic Zone', 'Standard Export Zone', 'Special Export Zone', 'Standard Economic Zone'], correctAnswer: 0, explanation: 'SEZ (Special Economic Zone) is a designated area with more liberal economic laws to attract foreign investment and boost exports.' },
        { question: 'FDI stands for?', options: ['Federal Domestic Investment', 'Foreign Direct Investment', 'Financial Development Index', 'Foreign Deposit Insurance'], correctAnswer: 1, explanation: 'FDI (Foreign Direct Investment) is investment made by a foreign entity in a business enterprise in another country.' },
        { question: 'ASEAN has how many member countries?', options: ['8', '10', '12', '15'], correctAnswer: 1, explanation: 'ASEAN (Association of Southeast Asian Nations) has 10 member countries.' },
        { question: 'What is a trade deficit?', options: ['Exports > Imports', 'Imports > Exports', 'Exports = Imports', 'No trade'], correctAnswer: 1, explanation: 'A trade deficit occurs when a country\'s imports exceed its exports in value.' },
        { question: 'BRICS includes?', options: ['Brazil, Russia, India, China, S. Africa', 'Britain, Russia, India, China, Spain', 'Brazil, Romania, India, Canada, S. Africa', 'None'], correctAnswer: 0, explanation: 'BRICS is an association of five major emerging economies: Brazil, Russia, India, China, and South Africa.' },
        { question: 'IMF provides?', options: ['Trade agreements', 'Financial stability and loans', 'Military aid', 'Food aid'], correctAnswer: 1, explanation: 'The International Monetary Fund (IMF) provides financial stability, monetary cooperation, and loans to member countries.' },
        { question: 'Dumping in trade means?', options: ['Exporting at higher price', 'Exporting at below cost', 'Not trading', 'Importing excess'], correctAnswer: 1, explanation: 'Dumping is the practice of exporting goods at a price lower than their normal value or cost of production in the domestic market.' },
        { question: 'Most Favoured Nation (MFN) is a principle of?', options: ['IMF', 'WTO', 'World Bank', 'UNCTAD'], correctAnswer: 1, explanation: 'Most Favoured Nation (MFN) is a fundamental principle of the WTO, requiring equal trade treatment to all member nations.' },
      ]
    }
  },
  science: {
    'Physics': {
      questions: [
        { question: 'Newton\'s first law is also called?', options: ['Law of Motion', 'Law of Inertia', 'Law of Action', 'Law of Force'], correctAnswer: 1, explanation: 'Newton\'s First Law is called the Law of Inertia - an object at rest stays at rest unless acted upon by an external force.' },
        { question: 'Speed of light is approximately?', options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'], correctAnswer: 1, explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ meters per second (299,792,458 m/s).' },
        { question: 'The SI unit of force is?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], correctAnswer: 2, explanation: 'The SI unit of force is Newton (N), named after Sir Isaac Newton. 1 Newton = 1 kg·m/s².' },
        { question: 'Which color has the longest wavelength?', options: ['Violet', 'Blue', 'Green', 'Red'], correctAnswer: 3, explanation: 'Red light has the longest wavelength (620-750 nm) in the visible spectrum, while violet has the shortest.' },
        { question: 'Sound cannot travel through?', options: ['Air', 'Water', 'Steel', 'Vacuum'], correctAnswer: 3, explanation: 'Sound requires a medium to travel and cannot propagate through a vacuum as there are no particles to vibrate.' },
        { question: 'The unit of electrical resistance is?', options: ['Ampere', 'Volt', 'Ohm', 'Watt'], correctAnswer: 2, explanation: 'The SI unit of electrical resistance is the Ohm (Ω), named after Georg Simon Ohm.' },
        { question: 'Nuclear fission means?', options: ['Joining nuclei', 'Splitting nuclei', 'Electron emission', 'Proton decay'], correctAnswer: 1, explanation: 'Nuclear fission is the process of splitting a heavy atomic nucleus into lighter nuclei, releasing enormous energy.' },
        { question: 'Who proposed the theory of relativity?', options: ['Newton', 'Einstein', 'Bohr', 'Heisenberg'], correctAnswer: 1, explanation: 'Albert Einstein proposed the Special Theory of Relativity (1905) and General Theory of Relativity (1915).' },
        { question: 'Acceleration due to gravity on Earth is?', options: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '7.8 m/s²'], correctAnswer: 1, explanation: 'The acceleration due to gravity on Earth\'s surface is approximately 9.8 m/s² (often rounded to 10 m/s²).' },
        { question: 'Which device converts mechanical energy to electrical?', options: ['Motor', 'Generator', 'Transformer', 'Battery'], correctAnswer: 1, explanation: 'A generator (dynamo) converts mechanical energy into electrical energy through electromagnetic induction.' },
      ]
    },
    'Chemistry': {
      questions: [
        { question: 'The pH of pure water is?', options: ['0', '7', '14', '1'], correctAnswer: 1, explanation: 'Pure water has a neutral pH of 7 at 25°C, where the concentration of H⁺ and OH⁻ ions are equal.' },
        { question: 'The hardest natural substance is?', options: ['Iron', 'Gold', 'Diamond', 'Platinum'], correctAnswer: 2, explanation: 'Diamond is the hardest known natural substance, scoring 10 on the Mohs hardness scale.' },
        { question: 'Which gas is most abundant in atmosphere?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], correctAnswer: 2, explanation: 'Nitrogen makes up approximately 78% of the Earth\'s atmosphere, followed by Oxygen at 21%.' },
        { question: 'The chemical symbol for gold is?', options: ['Go', 'Gd', 'Au', 'Ag'], correctAnswer: 2, explanation: 'The chemical symbol for gold is Au, derived from the Latin word "Aurum."' },
        { question: 'Rusting of iron is an example of?', options: ['Physical change', 'Chemical change', 'No change', 'Nuclear change'], correctAnswer: 1, explanation: 'Rusting is a chemical change where iron reacts with oxygen and moisture to form iron oxide (Fe₂O₃).' },
        { question: 'Noble gases are also called?', options: ['Active gases', 'Inert gases', 'Toxic gases', 'Reactive gases'], correctAnswer: 1, explanation: 'Noble gases (He, Ne, Ar, Kr, Xe, Rn) are called inert gases because they have complete outer electron shells and rarely react.' },
        { question: 'The atomic number represents?', options: ['Mass of atom', 'Number of protons', 'Number of neutrons', 'Total particles'], correctAnswer: 1, explanation: 'The atomic number represents the number of protons in the nucleus of an atom, which determines the element.' },
        { question: 'Which acid is present in the stomach?', options: ['Sulfuric acid', 'Nitric acid', 'Hydrochloric acid', 'Acetic acid'], correctAnswer: 2, explanation: 'Hydrochloric acid (HCl) is present in gastric juice in the stomach, helping in digestion of food.' },
        { question: 'Baking soda is chemically?', options: ['NaCl', 'NaHCO₃', 'Na₂CO₃', 'NaOH'], correctAnswer: 1, explanation: 'Baking soda is sodium bicarbonate (NaHCO₃), used in cooking, cleaning, and as an antacid.' },
        { question: 'Ozone is made up of?', options: ['2 oxygen atoms', '3 oxygen atoms', '4 oxygen atoms', '1 oxygen atom'], correctAnswer: 1, explanation: 'Ozone (O₃) is a molecule made up of three oxygen atoms, found in the stratosphere protecting Earth from UV radiation.' },
      ]
    },
    'Biology': {
      questions: [
        { question: 'The powerhouse of the cell is?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], correctAnswer: 2, explanation: 'Mitochondria are called the powerhouse of the cell because they produce ATP (energy currency) through cellular respiration.' },
        { question: 'DNA stands for?', options: ['Deoxyribonucleic Acid', 'Dioxyribonucleic Acid', 'Deribonucleic Acid', 'None'], correctAnswer: 0, explanation: 'DNA stands for Deoxyribonucleic Acid, which carries genetic information in all living organisms.' },
        { question: 'Photosynthesis occurs in?', options: ['Mitochondria', 'Chloroplast', 'Nucleus', 'Ribosome'], correctAnswer: 1, explanation: 'Photosynthesis occurs in the chloroplasts of plant cells, where light energy is converted to chemical energy.' },
        { question: 'The human body has how many bones?', options: ['196', '206', '216', '186'], correctAnswer: 1, explanation: 'An adult human body has 206 bones. Babies are born with about 270-300 bones, which fuse together over time.' },
        { question: 'Which vitamin is produced by sunlight?', options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], correctAnswer: 3, explanation: 'Vitamin D is produced in the skin when exposed to ultraviolet B (UVB) rays from sunlight.' },
        { question: 'Blood type is determined by?', options: ['Antigens', 'Antibodies', 'Plasma', 'Platelets'], correctAnswer: 0, explanation: 'Blood type is determined by antigens present on the surface of red blood cells (A, B, AB, or O type).' },
        { question: 'The largest organ of the human body is?', options: ['Liver', 'Heart', 'Skin', 'Brain'], correctAnswer: 2, explanation: 'The skin is the largest organ of the human body, covering approximately 1.5-2 square meters in adults.' },
        { question: 'Hemoglobin contains which metal?', options: ['Copper', 'Zinc', 'Iron', 'Magnesium'], correctAnswer: 2, explanation: 'Hemoglobin contains iron (Fe) at its center, which binds to oxygen for transport throughout the body.' },
        { question: 'Insulin is produced by?', options: ['Liver', 'Pancreas', 'Kidneys', 'Thyroid'], correctAnswer: 1, explanation: 'Insulin is produced by the beta cells of the Islets of Langerhans in the pancreas, regulating blood glucose levels.' },
        { question: 'The basic unit of life is?', options: ['Atom', 'Molecule', 'Cell', 'Tissue'], correctAnswer: 2, explanation: 'The cell is the basic structural and functional unit of all living organisms.' },
      ]
    },
    'Space Technology': {
      questions: [
        { question: 'ISRO was established in?', options: ['1962', '1965', '1969', '1972'], correctAnswer: 2, explanation: 'The Indian Space Research Organisation (ISRO) was established on August 15, 1969, by Dr. Vikram Sarabhai.' },
        { question: 'India\'s first satellite was?', options: ['Bhaskara', 'Aryabhata', 'Rohini', 'INSAT-1A'], correctAnswer: 1, explanation: 'Aryabhata was India\'s first satellite, launched on April 19, 1975, by a Soviet Kosmos-3M rocket.' },
        { question: 'Chandrayaan-1 was launched in?', options: ['2007', '2008', '2009', '2010'], correctAnswer: 1, explanation: 'Chandrayaan-1, India\'s first lunar probe, was launched on October 22, 2008, and discovered water molecules on the Moon.' },
        { question: 'Mars Orbiter Mission is also called?', options: ['Chandrayaan', 'Mangalyaan', 'Aditya', 'Gaganyaan'], correctAnswer: 1, explanation: 'The Mars Orbiter Mission (MOM), also called Mangalyaan, was launched in 2013, making India the first Asian nation to reach Mars orbit.' },
        { question: 'PSLV stands for?', options: ['Polar Satellite Launch Vehicle', 'Polar Space Launch Vehicle', 'Primary Satellite Launch Vehicle', 'None'], correctAnswer: 0, explanation: 'PSLV (Polar Satellite Launch Vehicle) is ISRO\'s workhorse launch vehicle, known for its reliability.' },
        { question: 'The first man on the Moon was?', options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'], correctAnswer: 1, explanation: 'Neil Armstrong was the first person to walk on the Moon on July 20, 1969, during the Apollo 11 mission.' },
        { question: 'Hubble Space Telescope was launched by?', options: ['ISRO', 'NASA', 'ESA', 'JAXA'], correctAnswer: 1, explanation: 'The Hubble Space Telescope was launched by NASA on April 24, 1990, aboard the Space Shuttle Discovery.' },
        { question: 'GPS is operated by?', options: ['India', 'USA', 'Russia', 'EU'], correctAnswer: 1, explanation: 'The Global Positioning System (GPS) is operated by the United States Space Force. India has its own system called NavIC.' },
        { question: 'India\'s human spaceflight program is called?', options: ['Chandrayaan', 'Gaganyaan', 'Mangalyaan', 'Aditya'], correctAnswer: 1, explanation: 'Gaganyaan is India\'s crewed orbital spacecraft program by ISRO, aiming to send Indian astronauts to space.' },
        { question: 'The International Space Station orbits at?', options: ['200 km', '400 km', '800 km', '1200 km'], correctAnswer: 1, explanation: 'The ISS orbits at approximately 400 km (250 miles) above Earth, completing one orbit every 90 minutes.' },
      ]
    },
    'IT & Computers': {
      questions: [
        { question: 'The full form of CPU is?', options: ['Central Processing Unit', 'Central Program Unit', 'Computer Processing Unit', 'Central Power Unit'], correctAnswer: 0, explanation: 'CPU stands for Central Processing Unit, often called the "brain" of the computer.' },
        { question: 'Binary system uses which digits?', options: ['0-9', '0-7', '0 and 1', '0-F'], correctAnswer: 2, explanation: 'The binary number system uses only two digits: 0 and 1, which form the basis of all computer operations.' },
        { question: 'RAM stands for?', options: ['Read Access Memory', 'Random Access Memory', 'Random All Memory', 'Read All Memory'], correctAnswer: 1, explanation: 'RAM stands for Random Access Memory - volatile memory used for temporary data storage while programs are running.' },
        { question: 'Who is called the father of computers?', options: ['Alan Turing', 'Charles Babbage', 'Bill Gates', 'Steve Jobs'], correctAnswer: 1, explanation: 'Charles Babbage is called the Father of Computers for his concept of the Analytical Engine (1837).' },
        { question: 'HTTP stands for?', options: ['HyperText Transfer Protocol', 'High Text Transfer Protocol', 'HyperText Transmission Protocol', 'None'], correctAnswer: 0, explanation: 'HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the World Wide Web.' },
        { question: 'Which language is used for web pages?', options: ['Java', 'Python', 'HTML', 'C++'], correctAnswer: 2, explanation: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.' },
        { question: '1 GB equals how many MB?', options: ['100', '512', '1000', '1024'], correctAnswer: 3, explanation: '1 Gigabyte (GB) equals 1024 Megabytes (MB) in binary computation.' },
        { question: 'Blockchain technology is used in?', options: ['Cryptocurrency', 'Supply chain', 'Healthcare', 'All of the above'], correctAnswer: 3, explanation: 'Blockchain technology is used in cryptocurrency, supply chain management, healthcare records, and many other applications.' },
        { question: 'AI stands for?', options: ['Automated Intelligence', 'Artificial Intelligence', 'Applied Intelligence', 'Advanced Intelligence'], correctAnswer: 1, explanation: 'AI stands for Artificial Intelligence - the simulation of human intelligence by computer systems.' },
        { question: 'The first computer programmer was?', options: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Charles Babbage'], correctAnswer: 0, explanation: 'Ada Lovelace is regarded as the first computer programmer for her work on Charles Babbage\'s Analytical Engine.' },
      ]
    }
  },
  environment: {
    'Biodiversity': {
      questions: [
        { question: 'The term biodiversity was coined by?', options: ['Charles Darwin', 'Walter G. Rosen', 'E.O. Wilson', 'Carl Linnaeus'], correctAnswer: 1, explanation: 'The term "biodiversity" was coined by Walter G. Rosen in 1985 during the planning of the National Forum on BioDiversity.' },
        { question: 'Which is the biodiversity hotspot in India?', options: ['Western Ghats', 'Eastern Ghats', 'Thar Desert', 'Gangetic Plains'], correctAnswer: 0, explanation: 'The Western Ghats is one of the four biodiversity hotspots in India, recognized for its exceptional concentration of endemic species.' },
        { question: 'The Red Data Book contains list of?', options: ['Common species', 'Endangered species', 'Extinct species only', 'All species'], correctAnswer: 1, explanation: 'The Red Data Book contains the list of endangered, vulnerable, and threatened species of plants and animals.' },
        { question: 'Endemic species are found in?', options: ['Everywhere', 'Specific geographic area', 'Only in zoos', 'Only in oceans'], correctAnswer: 1, explanation: 'Endemic species are native to and found only in a specific geographic area and nowhere else in the world.' },
        { question: 'India has how many biodiversity hotspots?', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'India has 4 biodiversity hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland.' },
        { question: 'Coral reefs are also known as?', options: ['Desert of the sea', 'Rainforests of the sea', 'Gardens of the sea', 'Forests of the sea'], correctAnswer: 1, explanation: 'Coral reefs are called "rainforests of the sea" due to their incredible biodiversity despite covering less than 1% of the ocean.' },
        { question: 'The national animal of India is?', options: ['Lion', 'Bengal Tiger', 'Elephant', 'Leopard'], correctAnswer: 1, explanation: 'The Bengal Tiger (Panthera tigris tigris) is the national animal of India, adopted in 1973.' },
        { question: 'Mangroves are found in?', options: ['Deserts', 'Mountains', 'Coastal areas', 'Grasslands'], correctAnswer: 2, explanation: 'Mangroves are salt-tolerant trees found in tropical and subtropical coastal areas, tidal zones, and estuaries.' },
        { question: 'CITES deals with?', options: ['Climate change', 'Trade in endangered species', 'Ocean pollution', 'Deforestation'], correctAnswer: 1, explanation: 'CITES (Convention on International Trade in Endangered Species) regulates international trade in wild plants and animals.' },
        { question: 'The Sundarbans is famous for?', options: ['Royal Bengal Tiger', 'Mangrove forests', 'Both A and B', 'Snow leopard'], correctAnswer: 2, explanation: 'The Sundarbans, a UNESCO World Heritage Site, is famous for both the Royal Bengal Tiger and the largest mangrove forest in the world.' },
      ]
    },
    'Climate Change': {
      questions: [
        { question: 'The Paris Agreement was signed in?', options: ['2014', '2015', '2016', '2017'], correctAnswer: 1, explanation: 'The Paris Agreement was adopted on December 12, 2015, with 196 parties committing to limit global warming to 1.5-2°C.' },
        { question: 'Which gas is the major greenhouse gas?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correctAnswer: 2, explanation: 'Carbon dioxide (CO₂) is the major greenhouse gas contributing to climate change, primarily from burning fossil fuels.' },
        { question: 'IPCC stands for?', options: ['International Panel on Climate Control', 'Intergovernmental Panel on Climate Change', 'Indian Panel on Climate Change', 'None'], correctAnswer: 1, explanation: 'IPCC (Intergovernmental Panel on Climate Change) is the UN body for assessing climate change science.' },
        { question: 'Carbon footprint measures?', options: ['CO₂ emissions', 'Water usage', 'Land use', 'Biodiversity loss'], correctAnswer: 0, explanation: 'Carbon footprint measures the total greenhouse gas emissions (expressed as CO₂ equivalent) caused by an individual, organization, or product.' },
        { question: 'Which sector emits the most CO₂?', options: ['Agriculture', 'Transport', 'Energy/Power', 'Industry'], correctAnswer: 2, explanation: 'The energy/power sector is the largest emitter of CO₂ globally, primarily from burning coal, oil, and natural gas for electricity.' },
        { question: 'Kyoto Protocol was adopted in?', options: ['1995', '1997', '1999', '2001'], correctAnswer: 1, explanation: 'The Kyoto Protocol was adopted on December 11, 1997, in Kyoto, Japan, committing industrialized nations to reduce greenhouse gas emissions.' },
        { question: 'Global warming potential of methane vs CO₂ is?', options: ['Equal', '5 times', '25 times', '100 times'], correctAnswer: 2, explanation: 'Methane has approximately 25 times the global warming potential of CO₂ over a 100-year period.' },
        { question: 'The largest carbon sink is?', options: ['Forests', 'Oceans', 'Soil', 'Atmosphere'], correctAnswer: 1, explanation: 'The oceans are the largest carbon sink, absorbing about 25-30% of CO₂ emissions produced by human activities.' },
        { question: 'COP26 was held in?', options: ['Paris', 'Glasgow', 'Madrid', 'Katowice'], correctAnswer: 1, explanation: 'COP26 (26th Conference of Parties) was held in Glasgow, Scotland in November 2021.' },
        { question: 'India\'s climate target is net zero by?', options: ['2050', '2060', '2070', '2080'], correctAnswer: 2, explanation: 'India has committed to achieving net-zero carbon emissions by 2070, announced by PM Modi at COP26 in Glasgow.' },
      ]
    },
    'Pollution': {
      questions: [
        { question: 'AQI stands for?', options: ['Air Quality Index', 'Air Quantity Index', 'Atmospheric Quality Index', 'Air Quality Indicator'], correctAnswer: 0, explanation: 'AQI (Air Quality Index) is a number used to communicate how polluted the air is, on a scale typically from 0 to 500.' },
        { question: 'The most common air pollutant is?', options: ['CO₂', 'Particulate Matter', 'SO₂', 'NOx'], correctAnswer: 1, explanation: 'Particulate Matter (PM2.5 and PM10) is the most common and harmful air pollutant in urban areas.' },
        { question: 'Minamata disease was caused by?', options: ['Lead', 'Mercury', 'Arsenic', 'Cadmium'], correctAnswer: 1, explanation: 'Minamata disease was caused by mercury poisoning from industrial wastewater in Minamata Bay, Japan, in the 1950s.' },
        { question: 'Eutrophication is caused by excess?', options: ['Oxygen', 'Nutrients (N & P)', 'Salt', 'Heavy metals'], correctAnswer: 1, explanation: 'Eutrophication is caused by excessive nutrients (nitrogen and phosphorus), leading to algal blooms and oxygen depletion in water bodies.' },
        { question: 'Which is the most polluted river in India?', options: ['Ganga', 'Yamuna', 'Godavari', 'Krishna'], correctAnswer: 1, explanation: 'The Yamuna is considered the most polluted river in India, especially in the Delhi stretch where it receives large amounts of untreated sewage.' },
        { question: 'Acid rain has pH less than?', options: ['7', '5.6', '4', '3'], correctAnswer: 1, explanation: 'Acid rain has a pH less than 5.6 (normal rain pH), caused by emissions of SO₂ and NOx reacting with water vapor in the atmosphere.' },
        { question: 'E-waste contains?', options: ['Lead', 'Mercury', 'Cadmium', 'All of the above'], correctAnswer: 3, explanation: 'Electronic waste (e-waste) contains hazardous materials including lead, mercury, cadmium, and other toxic substances.' },
        { question: 'The Bhopal Gas Tragedy involved?', options: ['Methyl isocyanate', 'Carbon monoxide', 'Chlorine', 'Ammonia'], correctAnswer: 0, explanation: 'The Bhopal Gas Tragedy (1984) was caused by the leak of methyl isocyanate (MIC) gas from the Union Carbide plant.' },
        { question: 'Noise pollution is measured in?', options: ['Hertz', 'Decibels', 'Pascal', 'Lumens'], correctAnswer: 1, explanation: 'Noise pollution is measured in decibels (dB). Prolonged exposure to noise above 85 dB can cause hearing damage.' },
        { question: 'Biomagnification means?', options: ['Decrease in toxins', 'Increase in toxins up food chain', 'Equal toxin levels', 'Toxin removal'], correctAnswer: 1, explanation: 'Biomagnification is the increasing concentration of toxic substances in organisms at higher levels of the food chain.' },
      ]
    },
    'Conservation': {
      questions: [
        { question: 'Project Tiger was launched in?', options: ['1970', '1973', '1975', '1980'], correctAnswer: 1, explanation: 'Project Tiger was launched on April 1, 1973, to protect the Bengal Tiger and its habitat. Jim Corbett National Park was the first tiger reserve.' },
        { question: 'How many national parks are in India?', options: ['89', '104', '106', '120'], correctAnswer: 2, explanation: 'India has 106 national parks (as of recent count), covering about 1.35% of India\'s total geographic area.' },
        { question: 'The first national park in India was?', options: ['Kaziranga', 'Jim Corbett', 'Gir', 'Ranthambore'], correctAnswer: 1, explanation: 'Jim Corbett National Park in Uttarakhand was the first national park in India, established in 1936 as Hailey National Park.' },
        { question: 'IUCN is headquartered in?', options: ['New York', 'Geneva', 'Gland, Switzerland', 'London'], correctAnswer: 2, explanation: 'The International Union for Conservation of Nature (IUCN) is headquartered in Gland, Switzerland.' },
        { question: 'Ramsar Convention deals with?', options: ['Forests', 'Wetlands', 'Deserts', 'Mountains'], correctAnswer: 1, explanation: 'The Ramsar Convention (1971) is an international treaty for the conservation and sustainable use of wetlands.' },
        { question: 'India\'s first biosphere reserve is?', options: ['Nilgiri', 'Nanda Devi', 'Sundarbans', 'Gulf of Mannar'], correctAnswer: 0, explanation: 'Nilgiri Biosphere Reserve was the first biosphere reserve in India, established in 1986.' },
        { question: 'WWF stands for?', options: ['World Wide Fund', 'World Wildlife Fund', 'World Wildlife Federation', 'World Fauna Foundation'], correctAnswer: 1, explanation: 'WWF stands for World Wildlife Fund (officially World Wide Fund for Nature since 1986).' },
        { question: 'Wildlife Protection Act was enacted in?', options: ['1970', '1972', '1975', '1980'], correctAnswer: 1, explanation: 'The Wildlife Protection Act was enacted in 1972 to protect wild animals and plants in India.' },
        { question: 'Kaziranga is famous for?', options: ['Bengal Tiger', 'One-horned Rhinoceros', 'Asiatic Lion', 'Snow Leopard'], correctAnswer: 1, explanation: 'Kaziranga National Park in Assam is famous for the Indian One-horned Rhinoceros, hosting about two-thirds of the world\'s population.' },
        { question: 'Green India Mission targets?', options: ['Solar energy', 'Forest cover increase', 'Clean water', 'Waste management'], correctAnswer: 1, explanation: 'The Green India Mission aims to increase forest/tree cover to 33% of India\'s geographic area, enhancing carbon sequestration.' },
      ]
    },
    'Environmental Laws': {
      questions: [
        { question: 'The Environment Protection Act was enacted in?', options: ['1984', '1986', '1988', '1990'], correctAnswer: 1, explanation: 'The Environment Protection Act was enacted in 1986, following the Bhopal Gas Tragedy, as an umbrella legislation for environmental protection.' },
        { question: 'EIA stands for?', options: ['Environmental Impact Assessment', 'Environmental Information Agency', 'Ecological Impact Analysis', 'Environmental Investigation Act'], correctAnswer: 0, explanation: 'EIA (Environmental Impact Assessment) evaluates the environmental consequences of proposed projects before they are approved.' },
        { question: 'The Water (Prevention of Pollution) Act was passed in?', options: ['1970', '1972', '1974', '1976'], correctAnswer: 2, explanation: 'The Water (Prevention and Control of Pollution) Act was passed in 1974 to prevent and control water pollution.' },
        { question: 'CPCB stands for?', options: ['Central Pollution Control Board', 'Central Public Control Bureau', 'Central Prevention & Control Bureau', 'None'], correctAnswer: 0, explanation: 'CPCB (Central Pollution Control Board) is a statutory organization under the Ministry of Environment to control pollution.' },
        { question: 'The Forest Conservation Act was enacted in?', options: ['1978', '1980', '1982', '1984'], correctAnswer: 1, explanation: 'The Forest Conservation Act was enacted in 1980 to check deforestation and regulate the diversion of forest land for non-forest purposes.' },
        { question: 'NGT stands for?', options: ['National Green Tribunal', 'National Government Tribunal', 'Natural Green Territory', 'None'], correctAnswer: 0, explanation: 'NGT (National Green Tribunal) was established in 2010 for effective and expeditious disposal of environmental cases.' },
        { question: 'The Air Act was passed in?', options: ['1979', '1981', '1983', '1985'], correctAnswer: 1, explanation: 'The Air (Prevention and Control of Pollution) Act was passed in 1981 to control air pollution.' },
        { question: 'Coastal Regulation Zone (CRZ) notification restricts?', options: ['Mining', 'Construction near coast', 'Fishing', 'Tourism'], correctAnswer: 1, explanation: 'CRZ notification regulates activities in coastal stretches to protect the coastal environment from unplanned development.' },
        { question: 'The Biological Diversity Act was enacted in?', options: ['2000', '2002', '2004', '2006'], correctAnswer: 1, explanation: 'The Biological Diversity Act was enacted in 2002 to conserve biological diversity, ensure sustainable use, and enable fair benefit sharing.' },
        { question: 'Who appoints the chairperson of NGT?', options: ['PM', 'President', 'CJI', 'Environment Minister'], correctAnswer: 2, explanation: 'The Chairperson of the National Green Tribunal is appointed by the Central Government in consultation with the Chief Justice of India.' },
      ]
    }
  },
  current: {
    'National': {
      questions: [
        { question: 'India\'s national flower is?', options: ['Rose', 'Lotus', 'Jasmine', 'Sunflower'], correctAnswer: 1, explanation: 'The Lotus (Nelumbo nucifera) is the national flower of India, symbolizing purity and beauty.' },
        { question: 'The National Education Policy was introduced in?', options: ['2018', '2019', '2020', '2021'], correctAnswer: 2, explanation: 'The National Education Policy (NEP) 2020 was approved on July 29, 2020, replacing the 1986 education policy.' },
        { question: 'Swachh Bharat Mission was launched in?', options: ['2013', '2014', '2015', '2016'], correctAnswer: 1, explanation: 'Swachh Bharat Mission (Clean India Mission) was launched on October 2, 2014, on Gandhi\'s birth anniversary.' },
        { question: 'Digital India was launched in?', options: ['2014', '2015', '2016', '2017'], correctAnswer: 1, explanation: 'Digital India programme was launched on July 1, 2015, to ensure digital access, digital inclusion, and digital empowerment.' },
        { question: 'Ayushman Bharat provides?', options: ['Free education', 'Health coverage', 'Housing', 'Food security'], correctAnswer: 1, explanation: 'Ayushman Bharat (PM-JAY) provides health coverage of ₹5 lakh per family per year to economically vulnerable families.' },
        { question: 'Smart Cities Mission aims to develop how many cities?', options: ['50', '75', '100', '125'], correctAnswer: 2, explanation: 'The Smart Cities Mission aims to develop 100 cities across India with sustainable infrastructure and smart solutions.' },
        { question: 'Aadhaar is a how many digit number?', options: ['10', '12', '14', '16'], correctAnswer: 1, explanation: 'Aadhaar is a 12-digit unique identification number issued by UIDAI to every resident of India.' },
        { question: 'Article 370 was abrogated in?', options: ['2017', '2018', '2019', '2020'], correctAnswer: 2, explanation: 'Article 370, granting special status to Jammu & Kashmir, was effectively abrogated on August 5, 2019.' },
        { question: 'India\'s UPI was launched in?', options: ['2014', '2015', '2016', '2017'], correctAnswer: 2, explanation: 'Unified Payments Interface (UPI) was launched in April 2016 by the National Payments Corporation of India.' },
        { question: 'G20 was hosted by India in?', options: ['2022', '2023', '2024', '2025'], correctAnswer: 1, explanation: 'India held the G20 presidency and hosted the G20 Summit in New Delhi on September 9-10, 2023.' },
      ]
    },
    'International': {
      questions: [
        { question: 'The United Nations was established in?', options: ['1944', '1945', '1946', '1947'], correctAnswer: 1, explanation: 'The United Nations was established on October 24, 1945, after World War II to maintain international peace and cooperation.' },
        { question: 'How many permanent members are in the UN Security Council?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: 'The UN Security Council has 5 permanent members (P5): USA, UK, France, Russia, and China, each with veto power.' },
        { question: 'The European Union has how many member states?', options: ['25', '27', '28', '30'], correctAnswer: 1, explanation: 'The EU currently has 27 member states (reduced from 28 after Brexit - UK\'s departure in 2020).' },
        { question: 'NATO stands for?', options: ['North Atlantic Treaty Organization', 'North American Treaty Organization', 'National Atlantic Treaty Organization', 'None'], correctAnswer: 0, explanation: 'NATO (North Atlantic Treaty Organization) is a military alliance of countries from North America and Europe, formed in 1949.' },
        { question: 'The World Bank headquarters is in?', options: ['New York', 'Geneva', 'Washington D.C.', 'London'], correctAnswer: 2, explanation: 'The World Bank Group is headquartered in Washington, D.C., United States.' },
        { question: 'SCO stands for?', options: ['South Cooperation Organization', 'Shanghai Cooperation Organisation', 'Security Council Organization', 'None'], correctAnswer: 1, explanation: 'SCO (Shanghai Cooperation Organisation) is a Eurasian political, economic, and security organization founded in 2001.' },
        { question: 'QUAD consists of?', options: ['US, UK, India, Japan', 'US, India, Japan, Australia', 'US, UK, Japan, Australia', 'India, Japan, China, Australia'], correctAnswer: 1, explanation: 'The QUAD (Quadrilateral Security Dialogue) consists of the United States, India, Japan, and Australia.' },
        { question: 'COP stands for?', options: ['Conference of Parties', 'Council of Parties', 'Committee of Parties', 'Convention of Protocols'], correctAnswer: 0, explanation: 'COP (Conference of the Parties) is the decision-making body of the UN Framework Convention on Climate Change.' },
        { question: 'WHO headquarters is in?', options: ['New York', 'Geneva', 'Paris', 'Vienna'], correctAnswer: 1, explanation: 'The World Health Organization (WHO) is headquartered in Geneva, Switzerland.' },
        { question: 'SAARC was founded in?', options: ['1983', '1985', '1987', '1989'], correctAnswer: 1, explanation: 'SAARC (South Asian Association for Regional Cooperation) was founded on December 8, 1985, in Dhaka, Bangladesh.' },
      ]
    },
    'Sports': {
      questions: [
        { question: 'Cricket World Cup 2023 was won by?', options: ['India', 'Australia', 'England', 'South Africa'], correctAnswer: 1, explanation: 'Australia won the 2023 ICC Cricket World Cup, held in India, defeating the host nation in the final.' },
        { question: 'Olympics are held every?', options: ['2 years', '3 years', '4 years', '5 years'], correctAnswer: 2, explanation: 'The modern Olympic Games are held every 4 years, alternating between Summer and Winter games every 2 years.' },
        { question: 'FIFA World Cup 2022 was held in?', options: ['Russia', 'Qatar', 'USA', 'Japan'], correctAnswer: 1, explanation: 'The 2022 FIFA World Cup was held in Qatar, the first World Cup in the Middle East.' },
        { question: 'India\'s national game is?', options: ['Cricket', 'Hockey', 'Kabaddi', 'No official national game'], correctAnswer: 3, explanation: 'India does not have an officially declared national game. Hockey is commonly but incorrectly believed to be the national game.' },
        { question: 'Who has won the most Grand Slam titles in tennis?', options: ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Pete Sampras'], correctAnswer: 2, explanation: 'Novak Djokovic holds the record for most Grand Slam titles in men\'s singles tennis.' },
        { question: 'IPL was first held in?', options: ['2007', '2008', '2009', '2010'], correctAnswer: 1, explanation: 'The first season of the Indian Premier League (IPL) was held in 2008, won by the Rajasthan Royals.' },
        { question: 'Neeraj Chopra won Olympic gold in?', options: ['Shot Put', 'Javelin Throw', 'Discus Throw', 'High Jump'], correctAnswer: 1, explanation: 'Neeraj Chopra won India\'s first Olympic gold medal in athletics, winning the Javelin Throw at the 2020 Tokyo Olympics.' },
        { question: 'Khelo India is a scheme for?', options: ['Senior athletes', 'Youth sports development', 'Olympic training', 'Cricket only'], correctAnswer: 1, explanation: 'Khelo India is a national program for development of sports, aimed at identifying young talent across India.' },
        { question: 'Hockey India League was revived in?', options: ['2022', '2023', '2024', '2025'], correctAnswer: 2, explanation: 'The Hockey India League was revived in 2024 after a gap, to promote hockey at the domestic level.' },
        { question: 'The Arjuna Award is given for?', options: ['Cinema', 'Sports excellence', 'Bravery', 'Literature'], correctAnswer: 1, explanation: 'The Arjuna Award is given to recognize outstanding achievements in sports and games in India.' },
      ]
    },
    'Awards & Honours': {
      questions: [
        { question: 'The highest civilian award in India is?', options: ['Padma Vibhushan', 'Bharat Ratna', 'Padma Bhushan', 'Padma Shri'], correctAnswer: 1, explanation: 'Bharat Ratna is the highest civilian award in India, instituted in 1954.' },
        { question: 'The Nobel Prize was established by?', options: ['Albert Einstein', 'Alfred Nobel', 'Isaac Newton', 'Marie Curie'], correctAnswer: 1, explanation: 'The Nobel Prize was established by Alfred Nobel, a Swedish inventor and industrialist, through his will in 1895.' },
        { question: 'Rabindranath Tagore won Nobel Prize in?', options: ['Literature', 'Peace', 'Physics', 'Chemistry'], correctAnswer: 0, explanation: 'Rabindranath Tagore won the Nobel Prize in Literature in 1913 for his collection of poems "Gitanjali."' },
        { question: 'The Booker Prize is for?', options: ['Science', 'Fiction', 'Peace', 'Economics'], correctAnswer: 1, explanation: 'The Booker Prize is awarded annually for the best novel written in English and published in the UK or Ireland.' },
        { question: 'Param Vir Chakra is the highest?', options: ['Civilian award', 'Military gallantry award', 'Sports award', 'Literary award'], correctAnswer: 1, explanation: 'Param Vir Chakra is India\'s highest military decoration for acts of conspicuous gallantry in the face of the enemy.' },
        { question: 'Who was the first Indian to receive the Nobel Prize?', options: ['C.V. Raman', 'Rabindranath Tagore', 'Mother Teresa', 'Amartya Sen'], correctAnswer: 1, explanation: 'Rabindranath Tagore was the first Indian to receive the Nobel Prize in 1913 for Literature.' },
        { question: 'The Dadasaheb Phalke Award is for?', options: ['Sports', 'Cinema', 'Literature', 'Science'], correctAnswer: 1, explanation: 'The Dadasaheb Phalke Award is India\'s highest award in cinema, given for outstanding contribution to Indian cinema.' },
        { question: 'Fields Medal is awarded in?', options: ['Physics', 'Mathematics', 'Chemistry', 'Biology'], correctAnswer: 1, explanation: 'The Fields Medal is awarded every four years to mathematicians under 40, considered the highest honor in mathematics.' },
        { question: 'Ashoka Chakra is awarded for?', options: ['War bravery', 'Bravery in peacetime', 'Sports', 'Arts'], correctAnswer: 1, explanation: 'Ashoka Chakra is India\'s highest peacetime military decoration for valor, courageous action, or self-sacrifice.' },
        { question: 'The Pulitzer Prize is associated with?', options: ['Music', 'Journalism and literature', 'Science', 'Sports'], correctAnswer: 1, explanation: 'The Pulitzer Prize is an award for achievements in newspaper, magazine, online journalism, literature, and musical composition in the US.' },
      ]
    },
    'Summits & Conferences': {
      questions: [
        { question: 'G7 stands for Group of?', options: ['5', '7', '8', '10'], correctAnswer: 1, explanation: 'G7 (Group of Seven) is a forum of seven of the world\'s largest advanced economies: USA, UK, France, Germany, Italy, Canada, and Japan.' },
        { question: 'BRICS summit 2023 was held in?', options: ['India', 'China', 'South Africa', 'Brazil'], correctAnswer: 2, explanation: 'The 15th BRICS Summit was held in Johannesburg, South Africa in August 2023, where 6 new members were invited.' },
        { question: 'The Davos Summit is organized by?', options: ['UN', 'World Economic Forum', 'World Bank', 'IMF'], correctAnswer: 1, explanation: 'The Davos Summit (Annual Meeting) is organized by the World Economic Forum (WEF) in Davos, Switzerland.' },
        { question: 'ASEAN Summit is held?', options: ['Annually', 'Biannually', 'Twice a year', 'Every 3 years'], correctAnswer: 2, explanation: 'ASEAN Summit is held twice a year, rotating among member states, to discuss regional cooperation.' },
        { question: 'The Non-Aligned Movement was founded at?', options: ['Bandung Conference', 'Belgrade Summit', 'Cairo Conference', 'Lusaka Summit'], correctAnswer: 1, explanation: 'The Non-Aligned Movement was formally founded at the Belgrade Summit in 1961, though the Bandung Conference (1955) laid its groundwork.' },
        { question: 'East Asia Summit includes how many countries?', options: ['16', '18', '20', '10'], correctAnswer: 1, explanation: 'The East Asia Summit includes 18 participating countries from the Asia-Pacific region.' },
        { question: 'APEC stands for?', options: ['Asia-Pacific Economic Cooperation', 'Asian-Pacific Economic Council', 'Asia-Pacific Environmental Council', 'None'], correctAnswer: 0, explanation: 'APEC (Asia-Pacific Economic Cooperation) is an inter-governmental forum for economies in the Pacific Rim.' },
        { question: 'The Commonwealth comprises how many nations?', options: ['52', '54', '56', '48'], correctAnswer: 1, explanation: 'The Commonwealth of Nations comprises 54 member states, most of which are former territories of the British Empire.' },
        { question: 'WHO World Health Assembly is held in?', options: ['New York', 'Geneva', 'London', 'Paris'], correctAnswer: 1, explanation: 'The World Health Assembly, WHO\'s decision-making body, meets annually in Geneva, Switzerland.' },
        { question: 'India\'s Look East Policy was renamed to?', options: ['Go East', 'Act East', 'Move East', 'Engage East'], correctAnswer: 1, explanation: 'India\'s Look East Policy was renamed to Act East Policy in 2014, signaling a more proactive engagement with Southeast Asian nations.' },
      ]
    }
  }
};

// Generate questions from templates
export function generateQuestionBank(): Question[] {
  const questions: Question[] = [];
  let id = 1;
  const difficulties: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];

  Object.entries(questionTemplates).forEach(([subject, chapters]) => {
    Object.entries(chapters).forEach(([chapter, data]) => {
      data.questions.forEach((q, idx) => {
        questions.push({
          ...q,
          id: `q_${id++}`,
          subject,
          chapter,
          difficulty: difficulties[idx % 3],
        });
      });
    });
  });

  return questions;
}

export const questionBank = generateQuestionBank();

export function getQuestionsByFilter(
  subject?: string,
  chapter?: string,
  difficulty?: string,
  count?: number
): Question[] {
  let filtered = [...questionBank];

  if (subject) filtered = filtered.filter(q => q.subject === subject);
  if (chapter) filtered = filtered.filter(q => q.chapter === chapter);
  if (difficulty) filtered = filtered.filter(q => q.difficulty === difficulty);

  // Shuffle
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  if (count) filtered = filtered.slice(0, count);

  return filtered;
}
