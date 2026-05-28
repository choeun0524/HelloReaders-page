import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const { lang } = await searchParams;
  return lang === 'en'
    ? { title: 'Blog | Hello Readers', description: 'Learning tips and stories from the Hello Readers classroom.' }
    : { title: 'Blog | Hello Readers', description: 'Hello Readers의 교육 이야기 — 학습법, 입시 정보, 공부 팁' };
}

const posts = {
  ko: [
    {
      id: 1,
      category: '학습법',
      title: '초등 수학, 연산보다 개념이 먼저입니다',
      excerpt: '많은 학부모님들이 연산 속도를 높이는 데 집중하지만, 개념 이해 없는 연산은 중등 과정에서 반드시 무너집니다. 올바른 수학 학습의 순서를 안내합니다.',
      date: '2026-04-28',
      readTime: '5분',
    },
    {
      id: 2,
      category: '내신 전략',
      title: '중등 내신 1등급을 만드는 3가지 습관',
      excerpt: '오답 노트, 개념 정리, 선생님 출제 패턴 분석 — 단순해 보이지만 꾸준히 실천하는 학생과 그렇지 않은 학생의 차이는 시험장에서 분명하게 드러납니다.',
      date: '2026-04-14',
      readTime: '4분',
    },
    {
      id: 3,
      category: '자기주도학습',
      title: '스스로 공부하는 아이로 키우는 방법',
      excerpt: '자기주도 학습은 타고나는 게 아니라 훈련됩니다. 작은 성공 경험을 쌓는 루틴 설계법과 부모님이 도울 수 있는 구체적인 방법을 소개합니다.',
      date: '2026-03-31',
      readTime: '6분',
    },
    {
      id: 4,
      category: '입시 정보',
      title: '2027 수능 대비, 중학교 때 준비해야 할 것들',
      excerpt: '수능은 고등학교에서 준비하는 게 아닙니다. 중등 시기에 잡아야 할 국어·영어·수학의 기초와 학습 방향을 미리 알아둡시다.',
      date: '2026-03-15',
      readTime: '7분',
    },
    {
      id: 5,
      category: '학습법',
      title: '영어 독해력, 단어 암기만으로는 부족합니다',
      excerpt: '단어를 많이 알아도 지문을 읽지 못하는 학생들의 공통점은 문장 구조를 모른다는 것입니다. 구문 분석 훈련이 왜 중요한지 설명합니다.',
      date: '2026-02-27',
      readTime: '5분',
    },
    {
      id: 6,
      category: '학원 이야기',
      title: 'Hello Readers의 소수정예 수업이란',
      excerpt: '6-10명 규모의 수업이 어떤 방식으로 진행되는지, 개별 맞춤 지도가 어떻게 이루어지는지 학원 내부의 실제 수업 방식을 공유합니다.',
      date: '2026-02-10',
      readTime: '3분',
    },
  ],
  en: [
    {
      id: 1,
      category: 'Learning Tips',
      title: 'Concepts Before Calculations in Primary Maths',
      excerpt: 'Many parents focus on speed drills, but without conceptual understanding, students inevitably struggle as they move into secondary school. Here is the right order for building maths foundations.',
      date: '2026-04-28',
      readTime: '5 min',
    },
    {
      id: 2,
      category: 'Study Strategy',
      title: '3 Habits That Build Top Academic Results',
      excerpt: 'Error notebooks, concept summaries, and understanding exam patterns — simple habits that separate students who consistently perform well from those who do not.',
      date: '2026-04-14',
      readTime: '4 min',
    },
    {
      id: 3,
      category: 'Self-Directed Learning',
      title: 'How to Raise a Child Who Studies Independently',
      excerpt: 'Self-directed learning is not a personality trait — it is a skill that can be trained. Here are practical routines and ways parents can genuinely support the process.',
      date: '2026-03-31',
      readTime: '6 min',
    },
    {
      id: 4,
      category: 'Education Info',
      title: 'What to Prepare in Middle School for Future Exams',
      excerpt: 'High-stakes exams are not prepared for in high school. Here is what students need to build in the middle school years across English, Korean, and Maths.',
      date: '2026-03-15',
      readTime: '7 min',
    },
    {
      id: 5,
      category: 'Learning Tips',
      title: 'Vocabulary Alone Is Not Enough for Reading Comprehension',
      excerpt: 'Students who know many words but still struggle with texts often share one thing in common — they do not understand sentence structure. Here is why it matters.',
      date: '2026-02-27',
      readTime: '5 min',
    },
    {
      id: 6,
      category: 'Hello Readers',
      title: 'What Small-Group Learning at Hello Readers Looks Like',
      excerpt: 'How do classes of 6–10 students actually run? What does personalised guidance look like in practice? We share what happens inside a Hello Readers session.',
      date: '2026-02-10',
      readTime: '3 min',
    },
  ],
};

const categoryColor: Record<string, string> = {
  '학습법': '#D4AF37',
  '내신 전략': '#4A90D9',
  '자기주도학습': '#5BAD6F',
  '입시 정보': '#C0636A',
  '학원 이야기': '#9B7EC8',
  'Learning Tips': '#D4AF37',
  'Study Strategy': '#4A90D9',
  'Self-Directed Learning': '#5BAD6F',
  'Education Info': '#C0636A',
  'Hello Readers': '#9B7EC8',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang: langParam } = await searchParams;
  const lang = langParam === 'en' ? 'en' : 'ko';
  const postList = posts[lang];

  const ui = {
    ko: {
      back: '홈으로',
      label: 'Hello Readers',
      title: '교육 블로그',
      subtitle: '학습법, 내신 전략, 입시 정보까지\n학원 현장의 이야기를 전합니다.',
      readSuffix: ' 읽기',
      copyright: '© 2026 Hello Readers. All rights reserved.',
    },
    en: {
      back: 'Back to Home',
      label: 'Hello Readers',
      title: 'Blog',
      subtitle: 'Learning tips, study strategies, and stories\nfrom the Hello Readers classroom.',
      readSuffix: ' read',
      copyright: '© 2026 Hello Readers. All rights reserved.',
    },
  }[lang];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>

      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href={`/?lang=${lang}`}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#666666' }}
          >
            <ArrowLeft className="w-4 h-4" />
            {ui.back}
          </Link>
          <span className="text-xl font-bold tracking-wider brand-text" style={{ color: '#D4AF37' }}>
            {ui.label}
          </span>
          <span className="text-sm font-semibold" style={{ color: '#1a1a1a' }}>Blog</span>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)' }}
      >
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#D4AF37', letterSpacing: '3px' }}>
          Hello Readers
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
          {ui.title}
        </h1>
        <p className="text-lg max-w-xl mx-auto whitespace-pre-line" style={{ color: '#666666', lineHeight: '1.8' }}>
          {ui.subtitle}
        </p>
      </section>

      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postList.map((post) => {
            const color = categoryColor[post.category] ?? '#D4AF37';
            return (
              <article
                key={post.id}
                className="blog-card rounded-xl overflow-hidden flex flex-col"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                  border: '1px solid #e8e8e8',
                }}
              >
                <div style={{ height: '4px', backgroundColor: color }} />
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full mb-4 self-start"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold mb-3 leading-snug" style={{ color: '#1a1a1a' }}>
                    {post.title}
                  </h2>
                  <p className="text-sm flex-1 mb-6" style={{ color: '#666666', lineHeight: '1.75' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#999999' }}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}{ui.readSuffix}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm"
        style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e0e0e0', color: '#999999' }}
      >
        {ui.copyright}
      </footer>
    </div>
  );
}
