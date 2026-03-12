import { Container, Section, Button } from '@/components/ui';

export function AboutPreview() {
  return (
    <Section variant="accent-dark" padding="lg">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            設立趣旨
          </h2>

          <div className="text-cyan-100 leading-relaxed space-y-4 mb-8">
            <p>
              クルマは、単なる移動手段ではありません。誰かにとっては家族との思い出であり、誰かにとっては夢中になれる趣味であり、誰かにとっては人生の節目をともにした存在です。
            </p>
            <p>
              私たちは、クルマ文化を未来へつないでいくために、その入口となる原体験を子どもたちの身近なところに取り戻す必要があると考えました。
            </p>
          </div>

          <Button as="link" href="/about" variant="outline" className="border-white text-white hover:bg-white/10">
            設立趣旨を読む
          </Button>
        </div>
      </Container>
    </Section>
  );
}
