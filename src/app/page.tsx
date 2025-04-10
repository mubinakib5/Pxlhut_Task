import MultiStepForm from '@/components/MultiStepForm';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 transition-colors">
      <ThemeToggle />
      <div className="max-w-2xl mx-auto">
        <MultiStepForm />
      </div>
    </main>
  );
}
