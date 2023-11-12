const quotes = [
  {
    quote:
      '우리가 알거니와 하나님을 사랑하는 자 곧 그 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라',
    author: '로마서 8:28 KLB',
  },
  {
    quote:
      '여호와 안에서 너희 기쁨을 찾아라. 그가 네 마음의 소원을 이루어 주실 것이다.',
    author: '시편 37:4 KLB',
  },
  {
    quote:
      '그리고 하늘에서 "이 사람은 내가 사랑하고 기뻐하는 내 아들이다" 라는 음성이 들려왔다.',
    author: '마태복음 3:17 KLB',
  },
  {
    quote: '사랑은 자신에 대해 새로운 것을 알려주는 사람을 만나는 것입니다.',
    author: '앙드레 브르통',
  },
  { quote: '사랑의 가장 좋은 증거는 신뢰입니다.', author: '조이스 형제' },
  {
    quote: '성장은 우리 자신의 약점을 받아들이기 시작할 때 시작됩니다.',
    author: '장 바니에',
  },
  {
    quote: '사랑은 내게 질문하지 않으며, 다만 끝없는 지지를 준다. ',
    author: '윌리엄 세익스피어',
  },
  {
    quote: 'When the time is right, I, the Lord, will make it happen.',
    author: 'Isaiah 60:22',
  },
  {
    quote:
      '인내와 절제는 지금보다 중요한 것들이 있음을 알고 견디어 내는 것입니다.',
    author: '버리기 잘한 습관들, 박길웅',
  },
  {
    quote:
      'And he said to her, "Daughter, your faith has made you well. Go in peace. Your suffering is over."',
    author: 'Mark 5:34',
  },
  {
    quote: '여호와를 경외하며 그의 길을 걷는 자마다 복이 있도다',
    author: '시편 128:1',
  },
]; // 10ea

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
