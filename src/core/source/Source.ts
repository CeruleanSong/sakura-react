/**
 * SourceManager.ts
 * - Initializes all sources availible in applicaiton.
 * - Determines which sources a manga can be downloaded from.
 * - Handles api interactions from designated sources
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { Sources, SourceType } from "./SourceList";
import * as MangaSee from "./sources/MangaSee";

const get = (source: SourceType, uri: string) => {
	// switch (uri) {
	// 	case Sources.mangasee.name:
	// 		break;
	// 	case Sources.mangasee.name:
	// 		break;
	// 	case Sources.mangasee.name:
	// }
};

const getLatest = async (source: SourceType, page?: number) => {

	switch (source) {
		case Sources.mangasee.name:
			return page ? MangaSee.getLatest(page) : MangaSee.getLatest();
			break;

		default:
			return null;
	}
};