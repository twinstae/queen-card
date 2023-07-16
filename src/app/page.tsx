import { Box } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';

export default function Home() {
	return <Box>

		<h2 className={css({
			fontSize: '5xl',
			color: 'red.400'
		})}>test</h2>

		test입니다
	</Box>;
}
