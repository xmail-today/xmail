import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PitchDeckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PitchDeckModal = ({ open, onOpenChange }: PitchDeckModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] p-0 bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-lg font-semibold">xMail Pitch Deck</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-full p-4 pt-2">
          <div 
            className="relative w-full h-0 overflow-hidden rounded-lg"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.canva.com/design/DAG8zmU9Cdk/5sLWqXCkNqlL9iFKOAIspg/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            <a 
              href="https://www.canva.com/design/DAG8zmU9Cdk/5sLWqXCkNqlL9iFKOAIspg/view?utm_content=DAG8zmU9Cdk&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              xmail
            </a>{' '}
            by Prince Kyle Zeto Cabahug
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
