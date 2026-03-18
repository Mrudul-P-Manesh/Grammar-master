import Link from 'next/link';
import { topics } from '@/data/grammar';
import { ArrowRight, BookOpen, Layers, MessageSquare, Type, Hash } from 'lucide-react';

const iconMap: Record<string, any> = {
  Structure: Layers,
  Voice: MessageSquare,
  Speech: Type,
  Blocks: BookOpen,
  Punctuation: Hash,
};

export default function LearnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 font-display mb-4">Grammar Topics</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Select a topic below to start learning. Each section contains detailed explanations, examples, and interactive quizzes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => {
          const Icon = iconMap[topic.icon] || BookOpen;
          return (
            <div key={topic.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="p-6 flex-grow">
                <div className={`w-12 h-12 rounded-xl ${topic.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{topic.title}</h2>
                <p className="text-gray-600 mb-6">{topic.description}</p>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Lessons</h3>
                  <ul className="space-y-2">
                    {topic.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <Link 
                          href={`/learn/${topic.id}/${lesson.id}`}
                          className="group flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-600 mr-3 transition-colors"></div>
                          {lesson.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 mt-auto">
                <Link 
                  href={`/learn/${topic.id}/${topic.lessons[0].id}`}
                  className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center justify-between w-full"
                >
                  Start Topic
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
