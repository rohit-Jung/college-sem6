import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the first slide with View Transition
  redirect('/slide/0');
}
