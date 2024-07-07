import { IVideo } from "@/types/type-server-response";
import YouTube, { YouTubeProps } from "react-youtube";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
} from "./ui/alert-dialog";

interface Iprops {
  open: boolean;
  setOpenDialog: (state: boolean) => void;
  video: IVideo | undefined;
}

const DialogTrailler = ({ open, setOpenDialog, video }: Iprops) => {
  const opts: YouTubeProps["opts"] = {
    height: "420",
    width: "1000",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <AlertDialog  open={open}>
      <AlertDialogContent  className="max-w-fit bg-black">
        <YouTube videoId={video?.key} opts={opts} />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpenDialog(false)}>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogTrailler;
