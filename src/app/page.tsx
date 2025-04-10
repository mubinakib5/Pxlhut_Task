import MultiStepForm from '@/components/MultiStepForm';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <MultiStepForm />
      </div>
    </main>
  );
}
