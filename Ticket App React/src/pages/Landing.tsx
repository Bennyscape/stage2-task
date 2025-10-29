import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, Clock, BarChart3 } from 'lucide-react';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      
        <div className="relative w-full h-52 overflow-hidden">
          <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full transform scale-y-[-1]">
            <path
              d="M0,200 L0.0,100.0 C 6.3,101.5 18.8,104.4 25.0,105.9 C 31.3,107.3 43.8,110.0 50.0,111.3 C 56.3,112.4 68.8,114.6 75.0,115.7 C 81.3,116.4 93.8,117.9 100.0,118.6 C 106.3,118.9 118.8,119.6 125.0,119.9 C 131.3,119.8 143.8,119.6 150.0,119.5 C 156.3,119.0 168.8,117.8 175.0,117.3 C 181.3,116.3 193.8,114.5 200.0,113.5 C 206.3,112.3 218.8,109.8 225.0,108.5 C 231.3,107.1 243.8,104.2 250.0,102.8 C 256.3,101.3 268.8,98.3 275.0,96.8 C 281.3,95.4 293.8,92.5 300.0,91.1 C 306.3,89.9 318.8,87.4 325.0,86.2 C 331.3,85.3 343.8,83.5 350.0,82.6 C 356.3,82.0 368.8,81.0 375.0,80.4 C 381.3,80.3 393.8,80.2 400.0,80.1 C 406.3,80.4 418.8,81.2 425.0,81.5 C 431.3,82.3 443.8,83.8 450.0,84.5 C 456.3,85.6 468.8,87.9 475.0,89.0 C 481.3,90.3 493.8,93.1 500.0,94.4 C 506.3,95.9 518.8,98.8 525.0,100.3 C 531.3,101.8 543.8,104.7 550.0,106.2 C 556.3,107.5 568.8,110.3 575.0,111.6 C 581.3,112.7 593.8,114.8 600.0,115.9 C 606.3,116.6 618.8,118.1 625.0,118.8 C 631.3,119.1 643.8,119.7 650.0,120.0 C 656.3,119.8 668.8,119.6 675.0,119.4 C 681.3,118.8 693.8,117.7 700.0,117.1 C 706.3,116.1 718.8,114.3 725.0,113.3 C 731.3,112.0 743.8,109.5 750.0,108.2 C 756.3,106.8 768.8,103.9 775.0,102.5 C 781.3,101.0 793.8,98.0 800.0,96.5 C 806.3,95.1 818.8,92.2 825.0,90.8 C 831.3,89.6 843.8,87.2 850.0,86.0 C 856.3,85.1 868.8,83.3 875.0,82.4 C 881.3,81.9 893.8,80.9 900.0,80.4 C 906.3,80.3 918.8,80.2 925.0,80.1 C 931.3,80.5 943.8,81.2 950.0,81.6 C 956.3,82.4 968.8,84.0 975.0,84.8 C 981.3,85.9 993.8,88.2 1000.0,89.3 C 1006.3,90.7 1018.8,93.3 1025.0,94.7 L1000.0,200.0 L0,200.0Z"
              fill="hsl(var(--primary))"
            >
              <animate
                attributeName="d"
                dur="9.0s"
                repeatCount="indefinite"
                values="M0,200 L0.0,100.0 C 6.3,101.5 18.8,104.4 25.0,105.9 C 31.3,107.3 43.8,110.0 50.0,111.3 C 56.3,112.4 68.8,114.6 75.0,115.7 C 81.3,116.4 93.8,117.9 100.0,118.6 C 106.3,118.9 118.8,119.6 125.0,119.9 C 131.3,119.8 143.8,119.6 150.0,119.5 C 156.3,119.0 168.8,117.8 175.0,117.3 C 181.3,116.3 193.8,114.5 200.0,113.5 C 206.3,112.3 218.8,109.8 225.0,108.5 C 231.3,107.1 243.8,104.2 250.0,102.8 C 256.3,101.3 268.8,98.3 275.0,96.8 C 281.3,95.4 293.8,92.5 300.0,91.1 C 306.3,89.9 318.8,87.4 325.0,86.2 C 331.3,85.3 343.8,83.5 350.0,82.6 C 356.3,82.0 368.8,81.0 375.0,80.4 C 381.3,80.3 393.8,80.2 400.0,80.1 C 406.3,80.4 418.8,81.2 425.0,81.5 C 431.3,82.3 443.8,83.8 450.0,84.5 C 456.3,85.6 468.8,87.9 475.0,89.0 C 481.3,90.3 493.8,93.1 500.0,94.4 C 506.3,95.9 518.8,98.8 525.0,100.3 C 531.3,101.8 543.8,104.7 550.0,106.2 C 556.3,107.5 568.8,110.3 575.0,111.6 C 581.3,112.7 593.8,114.8 600.0,115.9 C 606.3,116.6 618.8,118.1 625.0,118.8 C 631.3,119.1 643.8,119.7 650.0,120.0 C 656.3,119.8 668.8,119.6 675.0,119.4 C 681.3,118.8 693.8,117.7 700.0,117.1 C 706.3,116.1 718.8,114.3 725.0,113.3 C 731.3,112.0 743.8,109.5 750.0,108.2 C 756.3,106.8 768.8,103.9 775.0,102.5 C 781.3,101.0 793.8,98.0 800.0,96.5 C 806.3,95.1 818.8,92.2 825.0,90.8 C 831.3,89.6 843.8,87.2 850.0,86.0 C 856.3,85.1 868.8,83.3 875.0,82.4 C 881.3,81.9 893.8,80.9 900.0,80.4 C 906.3,80.3 918.8,80.2 925.0,80.1 C 931.3,80.5 943.8,81.2 950.0,81.6 C 956.3,82.4 968.8,84.0 975.0,84.8 C 981.3,85.9 993.8,88.2 1000.0,89.3 C 1006.3,90.7 1018.8,93.3 1025.0,94.7 L1000.0,200.0 L0,200.0Z;
                M0,200 L0.0,100.0 C 6.3,98.5 18.8,95.6 25.0,94.1 C 31.3,92.8 43.8,90.0 50.0,88.7 C 56.3,87.6 68.8,85.4 75.0,84.3 C 81.3,83.6 93.8,82.1 100.0,81.4 C 106.3,81.1 118.8,80.4 125.0,80.1 C 131.3,80.2 143.8,80.4 150.0,80.5 C 156.3,81.0 168.8,82.2 175.0,82.7 C 181.3,83.7 193.8,85.5 200.0,86.5 C 206.3,87.8 218.8,90.3 225.0,91.5 C 231.3,92.9 243.8,95.8 250.0,97.2 C 256.3,98.7 268.8,101.7 275.0,103.2 C 281.3,104.6 293.8,107.5 300.0,108.9 C 306.3,110.1 318.8,112.6 325.0,113.8 C 331.3,114.7 343.8,116.5 350.0,117.4 C 356.3,118.0 368.8,119.0 375.0,119.6 C 381.3,119.7 393.8,119.8 400.0,119.9 C 406.3,119.6 418.8,118.8 425.0,118.5 C 431.3,117.8 443.8,116.3 450.0,115.5 C 456.3,114.4 468.8,112.1 475.0,111.0 C 481.3,109.7 493.8,106.9 500.0,105.6 C 506.3,104.1 518.8,101.2 525.0,99.7 C 531.3,98.2 543.8,95.3 550.0,93.8 C 556.3,92.5 568.8,89.8 575.0,88.4 C 581.3,87.3 593.8,85.2 600.0,84.1 C 606.3,83.4 618.8,81.9 625.0,81.2 C 631.3,80.9 643.8,80.3 650.0,80.0 C 656.3,80.2 668.8,80.4 675.0,80.6 C 681.3,81.2 693.8,82.3 700.0,82.9 C 706.3,83.9 718.8,85.8 725.0,86.7 C 731.3,88.0 743.8,90.5 750.0,91.8 C 756.3,93.2 768.8,96.1 775.0,97.5 C 781.3,99.0 793.8,102.0 800.0,103.5 C 806.3,104.9 818.8,107.8 825.0,109.2 C 831.3,110.4 843.8,112.8 850.0,114.0 C 856.3,114.9 868.8,116.7 875.0,117.6 C 881.3,118.1 893.8,119.1 900.0,119.6 C 906.3,119.7 918.8,119.8 925.0,119.9 C 931.3,119.5 943.8,118.8 950.0,118.4 C 956.3,117.6 968.8,116.0 975.0,115.2 C 981.3,114.1 993.8,111.8 1000.0,110.7 C 1006.3,109.3 1018.8,106.7 1025.0,105.3 L1000.0,200.0 L0,200.0Z"
              />
            </path>
          </svg>
        </div>

        <div className="container relative mx-auto max-w-7xl px-4 py-10 md:py-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Manage Tickets with{' '}
              <span className="text-primary">Ease</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Streamline your workflow, track progress, and resolve issues faster with our intuitive ticket management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/auth/signup')}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/auth/login')}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features to help you stay organized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-lg bg-success/10 p-3 w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Track Progress
                </h3>
                <p className="text-muted-foreground">
                  Monitor ticket status from open to resolution with real-time updates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-lg bg-warning/10 p-3 w-fit mb-4">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Stay Organized
                </h3>
                <p className="text-muted-foreground">
                  Keep all your tickets in one place with powerful filtering and search.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Analyze Insights
                </h3>
                <p className="text-muted-foreground">
                  Get clear visibility into your ticket metrics and team performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};