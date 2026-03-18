import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { topics, lessonContent } from '@/data/grammar';
import { Quiz } from '@/components/Quiz';
import ReactMarkdown from 'react-markdown';

export default async function LessonPage({ params }: { params: Promise<{ topicId: string, lessonId: string }> }) {
  const { topicId, lessonId } = await params;
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return notFound();

  const lessonIndex = topic.lessons.findIndex(l => l.id === lessonId);
  if (lessonIndex === -1) return notFound();

  const lessonMeta = topic.lessons[lessonIndex];
  const contentKey = `${topicId}-${lessonId}`;
  const lessonData = lessonContent[contentKey];

  if (!lessonData) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Lesson Content Coming Soon</h1>
        <p className="text-gray-600 mb-8">We are still working on the content for this lesson.</p>
        <Link href="/learn" className="text-indigo-600 hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Topics
        </Link>
      </div>
    );
  }

  const prevLesson = lessonIndex > 0 ? topic.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < topic.lessons.length - 1 ? topic.lessons[lessonIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/learn" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center mb-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Topics
        </Link>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="uppercase tracking-wider font-semibold">{topic.title}</span>
          <span className="mx-2">•</span>
          <span>Lesson {lessonIndex + 1} of {topic.lessons.length}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 font-display">{lessonData.title}</h1>
      </div>

      <div className="prose prose-lg prose-indigo max-w-none mb-12">
        <div className="markdown-body text-gray-700 leading-relaxed">
          <ReactMarkdown>{lessonData.content}</ReactMarkdown>
        </div>
      </div>

      {lessonData.examples && lessonData.examples.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-indigo-500" />
            Examples
          </h2>
          <div className="space-y-4">
            {lessonData.examples.map((ex: any, idx: number) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="text-lg font-medium text-slate-900 mb-2">&quot;{ex.sentence}&quot;</p>
                <p className="text-slate-600">{ex.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {lessonData.quiz && lessonData.quiz.length > 0 && (
        <Quiz quiz={lessonData.quiz} />
      )}

      <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        {prevLesson ? (
          <Link 
            href={`/learn/${topicId}/${prevLesson.id}`}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous: {prevLesson.title}
          </Link>
        ) : (
          <div className="w-full sm:w-auto"></div>
        )}

        {nextLesson ? (
          <Link 
            href={`/learn/${topicId}/${nextLesson.id}`}
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Next: {nextLesson.title}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        ) : (
          <Link 
            href="/learn"
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors font-medium"
          >
            Complete Topic
            <CheckCircle2 className="w-4 h-4 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
